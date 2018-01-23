import React, { Component } from 'react'
import {
    ViewPagerAndroid, 
    View,
    ScrollView
} from 'react-native'

import styles from './styles'

import Page from './Page'

export default class PagerViewer extends Component {
    constructor(props) {
        super(props)

        this.monthlyPayment = 0
        this.totalMortgage = 0
        this.totalInterest = 0
    }

    componentDidUpdate() {
        this.pagerViewer.setPage(this.props.currentTab)
    }

    _onPageSelected(e) {
        this.props.setActive(e.nativeEvent.position)
    }

    renderMortgagePage() {
        return (
            <Page
                pageTitle={'mortgagePageTitle'}
                inputLabels={[
                    'loanAmount',
                    'yearlyInterest',
                    'loanPeriod'
                ]}
                results={[
                    {
                        label: 'monthlyPayment',
                        calc: ({ yearlyInterest, loanPeriod, loanAmount }) => { 
                            if (!parseFloat(yearlyInterest) ||
                                !parseFloat(loanPeriod) ||
                                !parseFloat(loanAmount)) {
                                    return 0
                                }
                                
                            // first, divide by 100 to get the real interest,
                            // then, divide by 12 to get the monthly interest.
                            const monthlyInterest = parseFloat(yearlyInterest) / 1200

                            // R/(1-(R+1)^n) = real interest.
                            const realInterest = monthlyInterest / (1 - (1 / Math.pow(1 + monthlyInterest, 12 * loanPeriod)))

                            const result = realInterest * loanAmount
                            
                            this.monthlyPayment = result

                            return result
                        }
                    },
                    {
                        label: 'totalInterest',
                        calc: ({ loanAmount }) => { 
                            const result = this.totalMortgage - loanAmount

                            if (!parseFloat(result) || result < 0) {
                                this.totalInterest = 0
                                return 0
                            }

                            this.totalInterest = result

                            return result
                        }
                    },
                    {
                        label: 'totalInterest',
                        calc: ({ loanAmount }) => {
                            const result = this.totalMortgage - loanAmount

                            if (!parseFloat(result) || result < 0) {
                                this.totalInterest = 0
                                return 0
                            }

                            this.totalInterest = result

                            return result
                        }
                    }
                ]} />
        )
    }

    renderReturnPage() {
        return (
            <Page
                pageTitle={'returnPageTitle'}
                inputLabels={[
                    'selfAmount',
                    'purchaseTax',
                    'otherExpenses',
                    'repairPrice',
                    'lawyerPrice',
                    'appraiserPrice',
                    'monthlyIncome',
                    'investmentPeriod',
                    'sellingPrice'
                ]}
                results={[
                    {
                        label: 'totalReturn',
                        calc: ({ 
                        loanAmount,
                        selfAmount, 
                        lawyerPrice, 
                        appraiserPrice, 
                        repairPrice, 
                        monthlyIncome, 
                        investmentPeriod, 
                        sellingPrice,
                        otherExpenses,
                        purchaseTax }) => { 
                            const purchaseTaxAmount = parseFloat(purchaseTax) * (loanAmount + selfAmount) / 100

                            const saleGain = sellingPrice - (selfAmount + loanAmount + lawyerPrice + appraiserPrice + repairPrice + otherExpenses + purchaseTaxAmount)

                            const result = 100 * (saleGain + monthlyIncome + investmentPeriod) / (selfAmount + this.totalInterest + repairPrice + lawyerPrice + appraiserPrice + otherExpenses + purchaseTaxAmount)

                            if (!result || result < 0) {
                                return 0
                            }
                            
                            return result
                        }
                    }
                ]} />
        )
    }

    render() {
        return (
            <ViewPagerAndroid
                ref={el => this.pagerViewer = el}
                style={[styles.pagerStyle]}
                keyboardDismissMode='on-drag'
                onPageSelected={this._onPageSelected.bind(this)}>
                {
                    this.props.direction === 'rtl' 
                    ? <View style={[styles.pagerContent]}>
                        {this.renderReturnPage()}
                    </View>
                    : null
                }
                <View style={[styles.pagerContent]}>
                    {this.renderMortgagePage()}
                </View>
                {
                    this.props.direction === 'rtl'
                        ? null
                        : <View style={[styles.pagerContent]}>
                            {this.renderReturnPage()}
                        </View>
                }
            </ViewPagerAndroid>
        )
    }
}