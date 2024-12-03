import { useCallback } from 'react'
import { BackHandler } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

const useAndroidBackHandler = (onBackPress: any) =>
	useFocusEffect(
		useCallback(() => {
			const backHandler = BackHandler.addEventListener(
				'hardwareBackPress',
				onBackPress,
			)
			return () => backHandler.remove()
		}, [onBackPress]),
	)

export default useAndroidBackHandler
