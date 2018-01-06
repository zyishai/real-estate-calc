// Default language(he), for other languages use the returned function.
const def = {
    mortgageTabLabel: 'משכנתא',
    returnTabLabel: 'תשואה',
    mortgagePageTitle: 'חישוב משכנתא',
    returnPageTitle: 'חישוב תשואה',
    loanAmount: 'גובה הלוואה',
    yearlyInterest: 'ריבית שנתית',
    loanPeriod: 'משך הלוואה',
    selfAmount: 'הון עצמי',
    purchaseTax: 'מס רכישה',
    otherExpenses: 'הוצאות נלוות',
    repairPrice: 'מחיר שיפוץ',
    lawyerPrice: 'מחיר עו״ד',
    appraiserPrice: 'מחיר שמאי',
    monthlyIncome: 'הכנסה חודשית',
    investmentPeriod: 'משך השקעה',
    sellingPrice: 'מחיר מכירה משוער',
    monthlyPayment: 'החזר חודשי',
    totalInterest: 'סה״כ ריבית',
    totalMortgage: 'סה״כ החזר משכנתא',
    totalReturn: 'סה״כ תשואה'
}

export default function(lang) {
    switch(lang) {
        case 'en':
            return require('./en').default
        default:
            return def
    }
}