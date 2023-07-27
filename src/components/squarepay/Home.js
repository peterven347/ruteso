import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import CheckBox from 'react-native-check-box'
import NumericInput from 'react-native-numeric-input'
import Ion from 'react-native-vector-icons/Ionicons';
import { food } from "./Food"


export default function Home() {

	const [textInput, setTextInput] = useState("")
	const [data, setData] = useState([].concat(...Object.values(food)))
	const matchCheck = textInput.toUpperCase()
	const cart = data.filter((i) => (i.checkState === true))
	const expense = cart?.reduce((acc, i) => {
		return acc + i.cost();
	}, 0)

	const [a, b] = useState(0)
	const updateItem = (id) => {
		setData((prevData) =>
			prevData.map((item) => {
				if (item.id == id) {
					return { ...item, checkState: !item.checkState };
				}
				return item
			})
		)
	}


	function A({ item }) {
		const [num, setNum] = useState(item.small_quantity)
		return (
			<>
				<View style={{ flexDirection: "row", backgroundColor: "#aaa", marginBottom: 1, alignItems: "center" }}>
					<View style={{ height: "80%" }}>
						<CheckBox style={{ paddingTop: "6%" }} isChecked={item.checkState} onClick={() => { updateItem(item.id) }} />
					</View>
					<View style={{ marginEnd: "8%" }}>
						<Text style={{ color: "black", fontSize: 20, fontWeight: "500", flexShrink: 1, marginBottom: 8, paddingVertical: 5 }}>{item.name}</Text>
						<Text style={{ color: "#555", fontSize: 12 }}>ertyufcewg</Text>
					</View>
					{item.checkState &&
						<>
							<View style={{ maxWidth: 100 }}>
								<Text style={{ color: "black", textAlign: "center" }}>Bag(s)</Text>
								<NumericInput                            value={item.big_quantity} onChange={value => item.big_quantity = value} rounded valueType='integer' type='up-down' minValue={0} validateOnBlur inputStyle={{ width: "100%" }} containerStyle={{ width: "50%" }} iconSize={100} iconStyle={{ color: "black" }} upDownButtonsBackgroundColor="white" borderColor="grey" />
							</View>
							<View style={{ maxWidth: 100 }}>
								<Text style={{ color: "black", textAlign: "center" }}>Cup(s)</Text>
								<NumericInput initValue={5} step={5} value={item.small_quantity} onChange={value => b(value)} rounded valueType='integer' type='up-down' minValue={0} validateOnBlur inputStyle={{ width: "100%" }} containerStyle={{ width: "50%" }} iconSize={100} iconStyle={{ color: "black" }} upDownButtonsBackgroundColor="white" borderColor="grey" />
							</View>
							<View style={{ marginLeft: "8%", justifyContent: "space-evenly" }}>
								<Text style={{ color: "black", marginTop: "80%" }}>Cost</Text>
								<Text style={{ color: "#333", fontWeight: "bold" }}>₦{(item.cost())}</Text>
							</View>
						</>}
					<Text>{num}</Text>
				</View>
			</>
		)
	}

	const renderItem = ({ item }) => (
		matchCheck === "" ?
			<A item={item}/>
		: matchCheck === item.name.toUpperCase()
		.substr(item.name.toUpperCase().indexOf(matchCheck), textInput.length)?
			<A item={item} />
		: null
	);

	const renderCart = ({ item }) => (
		<View style={{ backgroundColor: "blue", margin: 2 }}>
			<Text style={{ color: "white", fontSize: 20, fontWeight: "500", width: "25%" }}>{item.name}</Text>
		</View>
	);


	return (
		<View>
			<Text style={{ color: 'black', fontSize: 14, marginTop: 4 }}> Expense: ₦{expense}</Text>
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginVertical: 8 }}>
				<View style={{ width: "80%", }}>
					<TextInput style={{ backgroundColor: "white", width: "60%", alignSelf: "center", paddingLeft: 40, borderRadius: 6 }} placeholder=' search' cursorColor="lime" fontSize={20} value={textInput} onChangeText={e => setTextInput(e)} clearTextOnFocus={true} clearButtonMode="always"/>
					<Ion name="search" size={20} style={{ position: 'absolute', left: "25%", top: 14 }} />
				</View>
				<View style={{ marginEnd: "10%" }}>
					<Button title='View Cart' />
				</View>
			</View>
			<View style={{paddingBottom: 240, height: "104%"}}>
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
			
			<View style={{ height: 10 , backgroundColor:"red"}}>
				<Text>dfghjkl;</Text>
			</View>

			{/* <FlatList
				data={cart}
				renderItem={renderCart}
				keyExtractor={(item) => item.id + Math.random()}
			/> */}
		 {/* <View style={{ height: 30, backgroundColor:"red"}}></View> */}
			{/* <Button title='sd' onPress={ () => { console.log(list)}} /> */}
		</View>
	);
};

