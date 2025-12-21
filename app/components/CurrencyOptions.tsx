'use client';
import React, { useEffect, useState } from 'react'
import { setCurrency, getCurrency } from '@/app/api-services/commonService';

const CurrencyOptions = () => {
    const [currentCurrency, setCurrentCurrency] = useState('USD');

    useEffect(() => {
        const fetchCurrency = async () => {
            const currency = await getCurrency();
            setCurrentCurrency(currency);
        };
        fetchCurrency();
    }, []);
    
    const onChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const currency = e.target.value;
        console.log("Selected currency:", currency);  
        setCurrency(currency);
        setCurrentCurrency(currency);
    }

    return (
        <div>
            <select className="select select-bordered" value={currentCurrency} onChange={onChangeCurrency}>
                <option value="USD">US Dollar ($)</option>
                <option value="CAD">Canadian Dollar (C$)</option>
                <option value="AUD">Australian Dollar (A$)</option>
                <option value="EUR">Euro (€)</option>
                <option value="GBP">British Pound (£)</option>
                <option value="INR">Indian Rupee (₹)</option>
                <option value="NZD">New Zealand Dollar (NZ$)</option>
                <option value="PKR">Pakistan Rupee (₨)</option>
            </select>
        </div>
    )
}

export default CurrencyOptions;