import { MaterialIcons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
    Alert,
    Dimensions, KeyboardAvoidingView,
    ScrollView, StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import {Picker} from '@react-native-picker/picker';
import { HeaderWithOutMenu, SafeAreaView } from '@/components';
import { BlueButton } from '@/components/BlueButton';
import { useAuth } from '@/contexts';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Config(){
    //Get the user's infos
    const {user, refreshToken, token, signed, signOut} = useAuth()

    //Seting useState and useRef to email
    const[isEmailFocused, setIsEmailFocused] = useState(false)
    const [isEmailFilled, setIsEmailFilled] = useState(!!user?.email)
    const [email, setEmail] = useState<string | undefined>(user?.email)
    const emailRef = useRef<string | undefined>()

    //Seting useState to Name
    const[isNameFocused, setIsNameFocused] = useState(false)
    const [isNameFilled, setIsNameFilled] = useState(!!user?.name)
    const [name, setName] = useState<string | undefined>(user?.name)
    const nameRef = useRef<string | undefined>()

    //Seting useState and useRef to CPF
    const[isCPFFocused, setIsCPFFocused] = useState(false)
    const [isCPFFilled, setIsCPFFilled] = useState(!!user?.CPF)
    const [cpf, setCPF] = useState<string | undefined>(user?.CPF)
    const cpfRef = useRef(null)

    //Seting useState and useRef to Cellphone number
    const[isPhoneFocused, setIsPhoneFocused] = useState(false)
    const [isPhoneFilled, setIsPhoneFilled] = useState(!!user?.phone)
    const [phone, setPhone] = useState<string | undefined>(user?.phone)
    const phoneRef = useRef(null)

    //Seting useState and useRef to Date number
    const[isDateFocused, setIsDateFocused] = useState(false)
    const [isDateFilled, setIsDateFilled] = useState(!!user?.birthdate)
    const [date, setDate] = useState<string | undefined>(String(user?.birthdate))
    const dateRef = useRef(null)

    //Seting useState and useRef to HomeAddress
    const[isHomeAddressFocused, setIsHomeAddressFocused] = useState(false)
    const [isHomeAddressFilled, setIsHomeAddressFilled] = useState(!!user?.homeAddress)
    const [homeAddress, setHomeAddress] = useState<string | undefined>(user?.homeAddress)
    const homeAddressRef = useRef(null)

    //Seting useState and useRef to WorkAddress
    const[isWorkAddressFocused, setIsWorkAddressFocused] = useState(false)
    const [isWorkAddressFilled, setIsWorkAddressFilled] = useState(!!user?.workAddress)
    const [workAddress, setWorkAddress] = useState<string | undefined>(user?.workAddress)
    const workAddressRef = useRef(null)

    //Seting useSate for Health Plan
    const [isHealthPlanSelected, setHealthPlanSelection] = useState<boolean | undefined>(Boolean(user?.hasHealthPlan));
    const isHealthPlanSelectedRef = useRef<string | undefined>(user?.hasHealthPlan)

    //Seting useSate for Allow Message
    const [isAllowMessageSelected, setAllowMessageSelection] = useState<boolean | undefined>(Boolean(user?.allowSMS));
    const [gender, setGender] = useState<string | undefined>(user?.gender);
    const isAllowMessageSelectedRef = useRef<string | undefined>(user?.allowSMS)

    //Seting useState and useRef to Password
    const[isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [isPasswordFilled, setIsPasswordFilled] = useState(false)
    const [password, setPassword] = useState<string>()
    const passwordRef = useRef(null)

    //Seting useState and useRef to Confirm Password
    const[isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false)
    const [isConfirmPasswordFilled, setIsConfirmPasswordFilled] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState<string>()
    const confirmPasswordRef = useRef(null)

    //Seting useState and useRef to Neighborhood
    const[isNeighborhoodFocused, setIsNeighborhoodFocused] = useState(false)
    const [isNeighborhoodFilled, setIsNeighborhoodFilled] = useState(!!user?.neighborhood)
    const [neighborhood, setNeighborhood] = useState<string | undefined>(user?.neighborhood)
    const neighborhoodRef = useRef<string | undefined>()

    //Seting useState and useRef to HouseNumber
    const[isHouseNumberFocused, setIsHouseNumberFocused] = useState(false)
    const [isHouseNumberFilled, setIsHouseNumberFilled] = useState(false)
    const [houseNumber, setHouseNumber] = useState<number>()


    //Creating const for navigation
    const navigation = useNavigation()
    
    //Functions handle for email
    function handleInputEmailBlur(){
        setIsEmailFocused(false)
        setIsEmailFilled(!!email)
    }

    function handleInputEmailFocus(){
        setIsEmailFocused(true)
    }

    function handleInputEmailChange(value: string){
        setIsEmailFilled(!!value)
        setEmail(value)
    }

    //Functions handle for name
    function handleInputNameBlur(){
        setIsNameFocused(false)
        setIsNameFilled(!!name)
    }

    function handleInputNameFocus(){
        setIsNameFocused(true)
    }

    function handleInputNameChange(value: string){
        setIsNameFilled(!!value)
        setName(value)
    }

    //Functions handle for CPF
    function handleInputCPFBlur(){
        setIsCPFFocused(false)
        setIsCPFFilled(!!cpf)
    }

    function handleInputCPFFocus(){
        setIsCPFFocused(true)
    }

    function handleInputCPFChange(value: string){
        setIsCPFFilled(!!value)
        setCPF(value)
    }

    //Functions handle for Phone number
    function handleInputPhoneBlur(){
        setIsPhoneFocused(false)
        setIsPhoneFilled(!!phone)
    }

    function handleInputPhoneFocus(){
        setIsPhoneFocused(true)
    }

    function handleInputPhoneChange(value: string){
        setIsPhoneFilled(!!value)
        setPhone(value)
    }

    //Functions handle for Date of birth
    function handleInputDateBlur(){
        setIsDateFocused(false)
        setIsDateFilled(!!date)
    }

    function handleInputDateFocus(){
        setIsDateFocused(true)
    }

    function handleInputDateChange(value: string){
        setIsDateFilled(!!value)
        setDate(value)
    }

    //Functions handle for Home Address
    function handleInputHomeAddressBlur(){
        setIsHomeAddressFocused(false)
        setIsHomeAddressFilled(!!homeAddress)
    }

    function handleInputHomeAddressFocus(){
        setIsHomeAddressFocused(true)
    }

    function handleInputHomeAddressChange(value: string){
        setIsHomeAddressFilled(!!value)
        setHomeAddress(value)
    }

    //Functions handle for Work Address
    function handleInputWorkAddressBlur(){
        setIsWorkAddressFocused(false)
        setIsWorkAddressFilled(!!workAddress)
    }

    function handleInputWorkAddressFocus(){
        setIsWorkAddressFocused(true)
    }

    function handleInputWorkAddressChange(value: string){
        setIsWorkAddressFilled(!!value)
        setWorkAddress(value)
    }

    //Function handle for Health Plan
    function handleInputHealthPlan(){
        setHealthPlanSelection(!isHealthPlanSelected)
    }

    //Function handle for Health Plan
    function handleInputAllowMessage(){
        setAllowMessageSelection(!isAllowMessageSelected)
    }

    //Function handle for gender male
    function handleGender(value: string){
        setGender(value)
    }

    //Functions handle for Password
    function handleInputPasswordBlur(){
        setIsPasswordFocused(false)
        setIsPasswordFilled(!!password)
    }

    function handleInputPasswordFocus(){
        setIsPasswordFocused(true)
    }

    function handleInputPasswordChange(value: string){
        setIsPasswordFilled(!!value)
        setPassword(value)
    }

    //Functions handle for Confirm Password
    function handleInputConfirmPasswordBlur(){
        setIsConfirmPasswordFocused(false)
        setIsConfirmPasswordFilled(!!confirmPassword)
    }

    function handleInputConfirmPasswordFocus(){
        setIsConfirmPasswordFocused(true)
    }

    function handleInputConfirmPasswordChange(value: string){
        setIsConfirmPasswordFilled(!!value)
        setConfirmPassword(value)
    }

    //Functions handle for Neighborhood
    function handleInputNeighborhoodBlur(){
        setIsNeighborhoodFocused(false)
        setIsNeighborhoodFilled(!!neighborhood)
    }

    function handleInputNeighborhoodFocus(){
        setIsNeighborhoodFocused(true)
    }

    function handleInputNeighborhoodChange(value: string){
        setIsNeighborhoodFilled(!!value)
        setNeighborhood(value)
    }

    //Functions handle for HouseNumber
    function handleInputHouseNumberBlur(){
        setIsHouseNumberFocused(false)
        setIsHouseNumberFilled(!!houseNumber)
    }

    function handleInputHouseNumberFocus(){
        setIsHouseNumberFocused(true)
    }

    function handleInputHouseNumberChange(value: string){
        setIsHouseNumberFilled(!!value)
        setHouseNumber(+value)
    }
    

    //check with regex if the email is in the right format 
    function validateEmail(email: string){
        // Regex Check
        var objER = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email.length > 0)
            {
                if(objER.test(email))
                    return true;
                else
                    return false;
            }
        else
            return false;
    }

    //Checks if password has Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
    function validatePassword(password: string){
        // Regex Check
        var objER = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        if(password.length > 0)
            {
                if(objER.test(password))
                    return true;
                else
                    return false;
            }
        else
            return false;
    }

    //Reset email states
    function resetEmail(){
        setEmail('')
        setIsEmailFocused(false)
        setIsEmailFilled(false)
    }

    //Reset Name states
    function resetName(){
        setName('')
        setIsNameFocused(false)
        setIsNameFilled(false)
    }

    //Reset CPF states
    function resetCPF(){
        setCPF('')
        setIsCPFFocused(false)
        setIsCPFFilled(false)
    }

    //Reset Phone states
    function resetPhone(){
        setPhone('')
        setIsPhoneFocused(false)
        setIsPhoneFilled(false)
    }

    //Reset Date states
    function resetDate(){
        setDate('')
        setIsDateFocused(false)
        setIsDateFilled(false)
    }

    //Reset HomeAddress states
    function resetHomeAddress(){
        setHomeAddress('')
        setIsHomeAddressFocused(false)
        setIsHomeAddressFilled(false)
    }

    //Reset Neighborhood states
    function resetNeighborhood(){
        setNeighborhood('')
        setIsNeighborhoodFocused(false)
        setIsNeighborhoodFilled(false)
    }

    //Reset HouseNumber states
    function resetHouseNumber(){
        setHouseNumber(0)
        setIsHouseNumberFocused(false)
        setIsHouseNumberFilled(false)
    }

    //Reset Password and ConfirmPassword states
    function resetPassword(){
        setPassword('')
        setIsPasswordFocused(false)
        setIsPasswordFilled(false)
        setConfirmPassword('')
        setIsConfirmPasswordFocused(false)
        setIsConfirmPasswordFilled(false)
    }

    function resetAllFields(){
        resetEmail()
        resetName()
        resetCPF()
        resetDate()
        resetHomeAddress()
        resetHouseNumber()
        resetNeighborhood()
        resetPassword()
        resetPhone()
    }


    function handleProfile(){
        navigation.navigate('Profile')
    }

    //Checks if all the inputs are valid
    async function Check(){    
        //Check Email
        if(!validateEmail(String(email))){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor insira um email valido.",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetEmail())
                    }
                ]
            )
            return
        }

        //Check Name
        if(!name){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor insira seu nome.",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetName())
                    }
                ]
            )
            return
        }

        //Check CPF
        
        if(!cpfRef?.current.isValid()){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor insira um cpf valido.",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetCPF())
                    }
                ]
            )
            return
        }
        //Check Phone number
        if(!phoneRef.current.isValid()){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor insira um número de celular valido.",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetPhone())
                    }
                ]
            )
            return
        }

        //Check birthday
        if(!dateRef.current.isValid()){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor insira uma data de nascimento valida",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetDate())
                    }
                ]
            )
            return
        }

        //Check CEP
        if(!homeAddressRef.current.isValid()){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor insira um cep valido como seu endereço.",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetHomeAddress())
                    }
                ]
            )
            return
        }

        //Check Neighborhood
        if(!neighborhood){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor insira o nome do seu bairro.",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetNeighborhood())
                    }
                ]
            )
            return
        }

        //Check HouseNumber
        if(!houseNumber){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor insira o número da sua casa.",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetHouseNumber())
                    }
                ]
            )
            return
        }
        if(!gender){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "Por favor informe seu sexo biológico.",
                [
                    {
                        text: "Ok",
                        
                    }
                ]
            )
            return
        }

        //Checks if password is valid
        if(password &&!validatePassword(String(password))){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "A senha deve ter no minimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caracter especial",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetPassword())
                    }
                ]
            )
            return
        }

        //Checks if the user has entered the same passwords in the password and password confirmation fields 
        if(!(password === confirmPassword)){
            Alert.alert(
                "Erro ao efetuar a atualização",
                "As senhas inseridas não conferem. Digite novamente.",
                [
                    {
                        text: "Ok",
                        onPress: () => (resetPassword())
                    }
                ]
            )
            return
        }

        //Submit data to database
        try{
            
            const response = await api.put(`/patients/${user?.id}`,{
                email: email,
                name: name,
                CPF: cpfRef.current.getRawValue(),
                phone: phoneRef.current.getRawValue(),
                workAddress: workAddress,
                homeAddress: homeAddress,
                neighborhood: neighborhood,
                houseNumber: houseNumber,
                hasHealthPlan: isHealthPlanSelected,
                birthdate: dateRef.current.getRawValue(),
                password: password,
                allowSMS: isAllowMessageSelected
            })
            
            Alert.alert(
                "Atualização efetuada",
                "Seus dados foram atualizados com sucesso",
                [
                    {
                        text: "Ok",
                        onPress: () => (handleProfile())
                    }
                ]
            )
        }catch(error){
            Alert.alert(
                "Erro ao efetuar o cadastro",
                error.response.data.message,
                [
                    {
                        text: "Ok"
                    }
                ]
            )
        }

        return
    }

    return(
        <SafeAreaView 
            accessible={true}
            accessibilityLabel="Página de Configurações, altere os dados que desejar"
        >
            
            <ScrollView scrollEnabled = {true}>
                <HeaderWithOutMenu
                    titleScreen='Configurações'
                />   
                <KeyboardAvoidingView  
                    style={styles.container}
                    //behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                >                         
                        <View style={styles.container}>
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isEmailFocused || isEmailFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInput
                                    accessible={true}
                                    placeholder="Digite seu Email"
                                    style={styles.input}
                                    keyboardType = 'email-address'
                                    textContentType = 'emailAddress'
                                    value = {email}
                                    
                                    onBlur={handleInputEmailBlur}
                                    onFocus = {handleInputEmailFocus}
                                    onChangeText = {handleInputEmailChange}
                                />
                                
                                <MaterialIcons 
                                    name="email" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isEmailFocused || isEmailFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View>
                            
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isNameFocused || isNameFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInput
                                    accessible={true}
                                    placeholder="Digite seu nome Nome Completo"
                                    style={styles.input}
                                    textContentType = 'name'
                                    value={name}
                                    onBlur={handleInputNameBlur}
                                    onFocus = {handleInputNameFocus}
                                    onChangeText = {handleInputNameChange}
                                />
                                <MaterialIcons 
                                    name="person" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isNameFocused || isNameFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View> 
                            
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isCPFFocused || isCPFFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInputMask
                                    accessible={true}
                                    placeholder="Digite seu CPF"
                                    type = {'cpf'}
                                    value ={cpf}
                                    style={styles.input}
                                    onBlur={handleInputCPFBlur}
                                    onFocus = {handleInputCPFFocus}
                                    onChangeText = {handleInputCPFChange}
                                    ref = {cpfRef}
                                />
                                <MaterialIcons 
                                    name="person-outline" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isCPFFocused || isCPFFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View> 
                            
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isPhoneFocused || isPhoneFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInputMask
                                    accessible={true}
                                    placeholder="Digite seu Numero de Telefone"
                                    type = {'cel-phone'}
                                    textContentType = 'telephoneNumber'
                                    options ={{
                                        maskType: 'BRL',
                                        withDDD: true,
                                        dddMask: '(99) '
                                    }}
                                    value ={phone}
                                    style={styles.input}
                                    onBlur={handleInputPhoneBlur}
                                    onFocus = {handleInputPhoneFocus}
                                    onChangeText = {handleInputPhoneChange}
                                    ref={phoneRef}
                                    
                                    
                                />
                                <MaterialIcons 
                                    name="phone-android" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isPhoneFocused || isPhoneFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View>
                            
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isDateFocused || isDateFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInputMask
                                    accessible={true}
                                    placeholder="Data de nascimento: DD/MM/AAAA"
                                    type = {'datetime'}
                                    options ={{
                                        format: 'DD/MM/YYYY'
                                    }}
                                    value ={date}
                                    style={styles.input}
                                    onBlur={handleInputDateBlur}
                                    onFocus = {handleInputDateFocus}
                                    onChangeText = {handleInputDateChange}
                                    ref={dateRef}
                                    
                                    
                                />
                                <MaterialIcons 
                                    name="date-range" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isDateFocused || isDateFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View>
                            
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isHomeAddressFocused || isHomeAddressFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInputMask
                                    accessible={true}
                                    type={'custom'}
                                    placeholder="Digite o CEP da sua casa"
                                    textContentType = 'streetAddressLine1'
                                    keyboardType='numeric'
                                    options={{
                                        // required

                                        /**
                                         * mask: (String | required | default '')
                                         * the mask pattern
                                         * 9 - accept digit.
                                         * A - accept alpha.
                                         * S - accept alphanumeric.
                                         * * - accept all, EXCEPT white space.
                                        */
                                        mask: '99999-999',

                                        // optional

                                        /**
                                         * validator: (Function | optional | defaults returns true)
                                         * use this funcion to inform if the inputed value is a valid value (for invalid phone numbers, for example). The isValid method use this validator.
                                        */
                                        validator: function(value, settings) {
                                            // Regex Check
                                            var objER = /^[0-9]{5}-[0-9]{3}$/;
                                            if(value.length > 0)
                                                {
                                                    if(objER.test(value))
                                                        return true;
                                                    else
                                                        return false;
                                                }
                                            else
                                                return false;
                                        },

                                        /**
                                         * getRawValue: (Function | optional | defaults return current masked value)
                                         * use this function to parse and return values to use what you want.
                                         * for example, if you want to create a phone number mask (999) 999-99-99 but want to get only
                                         * the numbers for value, use this method for this parse step.
                                        */
                                        getRawValue: function(value, settings) {
                                        return String(value.replace("-", ""));
                                        },
                                        /**
                                         * translation: (Object | optional | defaults 9, A, S, *)
                                         * the dictionary that translate mask and value.
                                         * you can change defaults by simple override the key (9, A, S, *) or create some new.
                                        */
                                        translation: {
                                        // this is a custom translation. The others (9, A, S, *) still works.
                                        // this translation will be merged and turns into 9, A, S, *, #.
                                        '#': function(val) {
                                            if (val === ' ') {
                                            return val;
                                            }

                                            // if returns null, undefined or '' (empty string), the value will be ignored.
                                            return null;
                                        },
                                        // in this case, we will override build-in * translation (allow all characters)
                                        // and set this to allow only blank spaces and some special characters.
                                        '*': function(val) {
                                            return [' ', '#', ',', '.', '!'].indexOf(val) >= 0 ? val : null;
                                        }
                                        }
                                    }}
                                    value={homeAddress}
                                    onChangeText={handleInputHomeAddressChange}
                                    onBlur={handleInputHomeAddressBlur}
                                    onFocus = {handleInputHomeAddressFocus}
                                    style={styles.input}
                                    ref={homeAddressRef}
                                    
                                />
                                <MaterialIcons 
                                    name="home" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isHomeAddressFocused || isHomeAddressFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View>
                            
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isNeighborhoodFocused || isNeighborhoodFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInput
                                    accessible={true}
                                    placeholder="Digite seu Bairro"
                                    style={styles.input}
                                    textContentType = 'location'
                                    value={neighborhood}
                                    onBlur={handleInputNeighborhoodBlur}
                                    onFocus = {handleInputNeighborhoodFocus}
                                    onChangeText = {handleInputNeighborhoodChange}
                                />
                                <MaterialIcons 
                                    name="house-siding" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isNeighborhoodFocused || isNeighborhoodFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View> 
                            
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isHouseNumberFocused || isHouseNumberFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInput
                                    accessible={true}
                                    placeholder="Digite o Número da sua casa"
                                    style={styles.input}
                                    textContentType = 'location'
                                    keyboardType='numeric'
                                    onBlur={handleInputHouseNumberBlur}
                                    onFocus = {handleInputHouseNumberFocus}
                                    onChangeText = {handleInputHouseNumberChange}
                                />
                                <MaterialIcons 
                                    name="add-location" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isHouseNumberFocused || isHouseNumberFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View>
                            <View style={[
                                        styles.inputField,
                                        (isWorkAddressFocused || isWorkAddressFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInputMask
                                    accessible={true}
                                    type={'custom'}
                                    placeholder="DIgite o CEP do seu local de trabalho"
                                    textContentType = 'streetAddressLine1'
                                    keyboardType='numeric'
                                    options={{
                                        // required

                                        /**
                                         * mask: (String | required | default '')
                                         * the mask pattern
                                         * 9 - accept digit.
                                         * A - accept alpha.
                                         * S - accept alphanumeric.
                                         * * - accept all, EXCEPT white space.
                                        */
                                        mask: '99999-999',

                                        // optional

                                        /**
                                         * validator: (Function | optional | defaults returns true)
                                         * use this funcion to inform if the inputed value is a valid value (for invalid phone numbers, for example). The isValid method use this validator.
                                        */
                                        validator: function(value, settings) {
                                            // Regex Check
                                            var objER = /^[0-9]{5}-[0-9]{3}$/;
                                            if(value.length > 0)
                                                {
                                                    if(objER.test(value))
                                                        return true;
                                                    else
                                                        return false;
                                                }
                                            else
                                                return false;
                                        },

                                        /**
                                         * getRawValue: (Function | optional | defaults return current masked value)
                                         * use this function to parse and return values to use what you want.
                                         * for example, if you want to create a phone number mask (999) 999-99-99 but want to get only
                                         * the numbers for value, use this method for this parse step.
                                        */
                                        getRawValue: function(value, settings) {
                                        return String(value.replace("-", ""));
                                        },
                                        /**
                                         * translation: (Object | optional | defaults 9, A, S, *)
                                         * the dictionary that translate mask and value.
                                         * you can change defaults by simple override the key (9, A, S, *) or create some new.
                                        */
                                        translation: {
                                        // this is a custom translation. The others (9, A, S, *) still works.
                                        // this translation will be merged and turns into 9, A, S, *, #.
                                        '#': function(val) {
                                            if (val === ' ') {
                                            return val;
                                            }

                                            // if returns null, undefined or '' (empty string), the value will be ignored.
                                            return null;
                                        },
                                        // in this case, we will override build-in * translation (allow all characters)
                                        // and set this to allow only blank spaces and some special characters.
                                        '*': function(val) {
                                            return [' ', '#', ',', '.', '!'].indexOf(val) >= 0 ? val : null;
                                        }
                                        }
                                    }}
                                    value={workAddress}
                                    onChangeText={handleInputWorkAddressChange}
                                    onBlur={handleInputWorkAddressBlur}
                                    onFocus = {handleInputWorkAddressFocus}
                                    style={styles.input}
                                    
                            />
                                <MaterialIcons 
                                    name="work" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isWorkAddressFocused || isWorkAddressFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View>
                            <View 
                                accessible={true}
                                accessibilityRole="checkbox"
                                accessibilityLabel="Caixa de seleção. Marque se possui plano de saúde"
                                style={[
                                        styles.checkbox,
                                        (isHealthPlanSelected) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <Text style={styles.label}>Possui plano de saúde privado? </Text>
                                <CheckBox
                                    value={isHealthPlanSelected}
                                    onValueChange={handleInputHealthPlan}
                                />
                            </View>

                            <View
                                accessible={true}
                                accessibilityLabel="Caixa de seleção. Marque para permitir que possamos te enviar menssagens" 
                                style={[
                                        styles.checkbox,
                                        (isAllowMessageSelected) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <Text style={styles.label}>Nos permite enviar messagens? </Text>
                                <CheckBox
                                    value={isAllowMessageSelected}
                                    onValueChange={handleInputAllowMessage}
                                />
                            </View>
                            <View style={styles.warning}>
                                <Text style={styles.warningText}>* Obrigatório </Text>
                            </View>
                            <View
                                accessible={true}
                                accessibilityLabel="Caixa de seleção. Marque seu sexo biológico" 
                                style={[
                                        styles.inputField,
                                        (gender!=null)&&
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <Picker
                                    selectedValue={gender}
                                    style={{ height: 50, width: 270, borderWidth: 1, borderBottomColor: colors.black }}
                                    onValueChange={(itemValue, gender) =>
                                        setGender(itemValue)
                                    }>
                                    <Picker.Item label="Sexo biológico..." value={null}/>
                                    <Picker.Item label="masculino" value="masculino"/>
                                    <Picker.Item label="Feminino" value="feminino"/>
                                </Picker>
                            </View>
                            
                            <View style={[
                                        styles.inputField,
                                        (isPasswordFocused || isPasswordFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInput
                                    accessible={true}
                                    placeholder="Insira uma nova Senha"
                                    style={styles.input}
                                    value = {password}
                                    textContentType = 'newPassword'
                                    secureTextEntry = {true}
                                    onBlur={handleInputPasswordBlur}
                                    onFocus = {handleInputPasswordFocus}
                                    onChangeText = {handleInputPasswordChange}
                                />
                                <MaterialIcons 
                                    name="lock" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isPasswordFocused || isPasswordFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View> 
                            <View style={[
                                        styles.inputField,
                                        (isConfirmPasswordFocused || isConfirmPasswordFilled) && 
                                        {borderColor: colors.blue}
                                    ]}
                            >
                                <TextInput
                                    accessible={true}
                                    placeholder="Digite novamente a senha"
                                    style={styles.input}
                                    value = {confirmPassword}
                                    textContentType = 'password'
                                    secureTextEntry = {true}
                                    onBlur={handleInputConfirmPasswordBlur}
                                    onFocus = {handleInputConfirmPasswordFocus}
                                    onChangeText = {handleInputConfirmPasswordChange}
                                />
                                <MaterialIcons 
                                    name="lock-outline" 
                                    size={24}

                                    color = "gray"
                                    style={[
                                        styles.Icon,
                                        (isConfirmPasswordFocused || isConfirmPasswordFilled) && 
                                        {color: colors.blue}
                                    ]}    
                                />
                            </View> 
                            <View style={styles.button}>
                                <BlueButton
                                    accessible={true}
                                    accessibilityLabel="Clique para efetuar o cadastro"
                                    title="Atualizar"
                                    onPress={Check}
                                />
                            </View>
                        </View>
                    
                </KeyboardAvoidingView>
            </ScrollView>       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    warning:{
        left: Dimensions.get('window').width * 0.33,
        paddingTop: 10
    },
    warningText:{
        fontFamily: fonts.text,
        fontSize: 8,
        color: colors.red
    },
    inputField: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.gray,
        padding: 10
        
    },
    Icon:{
        padding: 10,
    },
    input:{
        color: colors.gray_dark3,
        width: '70%',
        fontFamily: fonts.text,
        fontSize: 16,
        //textAlign: 'center'
    },
    label:{
        fontFamily: fonts.generic  
    },
    answer: {
        fontFamily: fonts.text
    },
    button:{
        //marginTop: 40,
        width: Dimensions.get('window').width * 0.9,
        padding: 40,
    },
    checkbox:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: colors.gray,
        padding: 10
    }
   
  });