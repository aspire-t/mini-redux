// https://github.com/reduxjs/react-redux/blob/master/src/components/Provider.tsx
import React from 'react'
import ReactReduxContext from './ReactReduxContext'

// 就是context 的 provider，把值传递出来
export default function (props) {
	return (
		<ReactReduxContext.Provider value={{ store: props.store }}>
			{props.children}
		</ReactReduxContext.Provider>
	)
}