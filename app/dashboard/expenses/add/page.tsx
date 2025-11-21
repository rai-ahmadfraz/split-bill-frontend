"use client";
import { useState, useEffect } from "react";
import { getFriends } from "@/app/api-services/friendService";
import Link from "next/link";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [isPersonal, setIsPersonal] = useState<boolean | null>(false);
  const [shareType, setShareType] = useState<"equal" | "percentage" | "fixed">("equal");

  const [users, setUsers] = useState<Array<{ id: number; name: string }>>([]);
  const [participants, setParticipants] = useState<
    Array<{ id: number; name: string; selected: boolean; share_value: string }>
  >([]);

  const [validationMessage, setValidationMessage] = useState("");

  // Load friends
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const data = await getFriends();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch friends:", error);
      }
    };
    fetchFriends();
  }, []);

  // Sync participants with users
  useEffect(() => {
    setParticipants(
      users.map((u) => ({
        id: u.id,
        name: u.name,
        selected: false,
        share_value: "",
      }))
    );
  }, [users]);

  // Auto-fill equal shares
  useEffect(() => {
    if (shareType !== "equal") return;

    const selected = participants.filter((p) => p.selected);
    if (selected.length === 0) return;

    const equalValue = (Number(amount) / selected.length).toFixed(2);
    setParticipants((prev) =>
      prev.map((p) => ({
        ...p,
        share_value: p.selected ? equalValue : "",
      }))
    );
  }, [shareType, amount, participants.map((p) => p.selected).join(",")]);

  const toggleParticipant = (id: number) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, selected: !p.selected } : p))
    );
  };

  const updateShareValue = (id: number, value: string) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, share_value: value } : p))
    );
  };

  // Validate shares
  useEffect(() => {
    if (isPersonal) {
      setValidationMessage("");
      return;
    }

    const selected = participants.filter((p) => p.selected);

    if (selected.length === 0) {
      setValidationMessage("Select at least one participant");
      return;
    }

    if (shareType === "percentage") {
      const total = selected.reduce((sum, p) => sum + Number(p.share_value || 0), 0);
      if (total !== 100) {
        setValidationMessage(`Total percentage must be 100. Current: ${total}`);
        return;
      }
    }

    if (shareType === "fixed") {
      const total = selected.reduce((sum, p) => sum + Number(p.share_value || 0), 0);
      if (Number(amount) && total !== Number(amount)) {
        setValidationMessage(`Total fixed shares must equal ${amount}. Current: ${total}`);
        return;
      }
    }

    setValidationMessage("");
  }, [participants, shareType, amount, isPersonal]);

  const handleSubmit = () => {
    if (validationMessage) return;

    const selected = participants.filter((p) => p.selected);

    const payload = {
      name,
      amount: Number(amount),
      paid_id: paidBy,
      is_personal: isPersonal,
      participants: isPersonal
        ? undefined
        : selected.map((p) =>
            shareType === "equal"
              ? { id: p.id, share_type: "equal" }
              : { id: p.id, share_type: shareType, share_value: Number(p.share_value) }
          ),
    };

    console.log("Final Payload:", payload);
  };

  const isSaveDisabled =
    Boolean(validationMessage) || !name || !amount || (!isPersonal && !paidBy);

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
      {/* <h2 className="text-2xl font-bold text-gray-800">Add Expense</h2> */}
      <div className="flex justify-between items-center mt-2 mb-3">
        <h2 className="text-2xl font-semibold">Add Expense</h2>

        <Link
          href="/dashboard/expenses"
          className="text-white-600 hover:text-white-800 text-lg"
        >
          Back
        </Link>
      </div>

      {/* Expense Name */}
      <div>
        <label className="block text-gray-700 mb-2 font-medium">Expense Name</label>
        <input
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Expense Amount */}
      <div>
        <label className="block text-gray-700 mb-2 font-medium">Expense Amount</label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Is Personal */}
      <div>
        <span className="block text-gray-700 mb-2 font-medium">Is Personal?</span>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isPersonal"
              onChange={() => setIsPersonal(true)}
              className="w-5 h-5"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isPersonal"
              onChange={() => setIsPersonal(false)}
              className="w-5 h-5"
            />
            No
          </label>
        </div>
      </div>

      {!isPersonal && (
        <>
          {/* Paid By */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Paid By</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={paidBy}
              onChange={(e) => setPaidBy(e.target.value)}
            >
              <option value="">Select person</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>

          {/* Share Type */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Share Type</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={shareType}
              onChange={(e) => setShareType(e.target.value as any)}
            >
              <option value="equal">Equal</option>
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>

          {/* Participants */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Participants</label>
            <div className="border border-gray-300 rounded-lg p-4 space-y-3">
              {participants.map((p) => (
                <div key={p.id} className="flex items-center justify-between">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={p.selected}
                      onChange={() => toggleParticipant(p.id)}
                      className="w-5 h-5"
                    />
                    {p.name}
                  </label>

                  {p.selected && shareType !== "equal" && (
                    <input
                      type="number"
                      className="w-28 border border-gray-300 rounded-lg p-2 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder={shareType === "percentage" ? "%" : "Amount"}
                      value={p.share_value}
                      onChange={(e) => updateShareValue(p.id, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Validation Message */}
      {validationMessage && (
        <div className="text-red-500 text-sm">{validationMessage}</div>
      )}

      {/* Buttons */}
      <div className="flex justify-end gap-4">

        <button
            className={`px-5 py-3 rounded-lg text-white font-medium transition-all duration-200 shadow ${
            isSaveDisabled
                ? "bg-gray-300 cursor-not-allowed opacity-70"
                : "bg-gray-800 hover:bg-gray-900"
            }`}
            onClick={handleSubmit}
            disabled={isSaveDisabled}
        >
            Save Expense
        </button> 
       
      </div>
    </div>
  );
};

export default AddExpense;
