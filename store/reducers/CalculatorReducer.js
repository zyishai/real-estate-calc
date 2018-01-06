import { UPDATE_USER_INPUT } from '../actions'

const initialState = {
    loanAmount: 0,
    yearlyInterest: 0,
    loanPeriod: 0,
    selfAmount: 0,
    purchaseTax: 0,
    otherExpenses: 0,
    repairPrice: 0,
    lawyerPrice: 0,
    appraiserPrice: 0,
    monthlyIncome: 0,
    investmentPeriod: 0,
    sellingPrice: 0,
    monthlyPayment: 0,
    totalInterest: 0,
    totalMortgage: 0,
    totalReturn: 0
}

export default function(state=initialState, action) {
    switch(action.type) {
        case UPDATE_USER_INPUT:
            let newState = Object.assign({}, state, action.payload)
            return newState
        default:
            return state
    }
}