import React, { Component } from 'react'
import {
    ViewPagerAndroid, 
    View,
    ScrollView
} from 'react-native'

import styles from './styles'

import Page from './Page'

export default class PagerViewer extends Component {
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