import { getCurrency } from "@/app/api-services/commonService";

export const formatCurrency = async (amount: number): Promise<string> => {
  try {
    const currency = await getCurrency();
    const numericAmount = Number(amount);
    
    if (isNaN(numericAmount)) {
      console.log('Invalid amount provided to formatCurrency');
      return '';
    }

    // Get the formatted currency string
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
    }).format(Math.abs(numericAmount)); // Format absolute value first

    // If amount is negative, insert negative sign after the currency symbol
    if (numericAmount < 0) {
      // Find the position where numbers start (after the currency symbol)
      const match = formatted.match(/\d/);
      if (match && match.index) {
        // Insert negative sign before the number
        return formatted.slice(0, match.index) + '-' + formatted.slice(match.index);
      }
    }
    
    return formatted;
  } catch (error) {
    console.error('Error formatting currency:', error);
    return '';
  }
};

export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};