import React, { Component } from 'react'
import {
    ViewPagerAndroid, 
    View,
    ScrollView
} from 'react-native'

import styles from './styles'

import Page from './Page'

export default class PagerViewer extends Component {
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
                        calc: () => { return 0 }
                    },
                    {
                        label: 'totalInterest',
                        calc: () => { return 0 }
                    },
                    {
                        label: 'totalMortgage',
                        calc: () => { return 0 }
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
                        calc: () => { return 0 }
                    }
                ]} />
        )
    }

    render() {
        const { direction } = this.props
        const initialPage = direction === 'rtl' ? 1 : 0
        return (
            <ViewPagerAndroid
                style={[styles.pagerStyle]}
                initialPage={initialPage}
                keyboardDismissMode='on-drag'>
                {
                    direction === 'rtl' 
                    ? <View style={[styles.pagerContent]}>
                        {this.renderReturnPage()}
                    </View>
                    : null
                }
                <View style={[styles.pagerContent]}>
                    {this.renderMortgagePage()}
                </View>
                {
                    direction === 'rtl'
                        ? null
                        : <View style={[styles.pagerContent]}>
                            {this.renderReturnPage()}
                        </View>
                }
            </ViewPagerAndroid>
        )
    }
}