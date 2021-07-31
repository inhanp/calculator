/*
 * Implement all your JavaScript in this file!
 */
var sum = ""
var value = ""
var total = ""
var operatorList = ['+','-','*','/']
var operator = ""
var check = false

$(" #button1 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button2 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button3 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button4 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button5 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button6 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button7 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button8 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button9 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #button0 ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    value = value + $(this).attr('value');
    $("#display").attr('value', value)
})
$(" #addButton ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    if (sum === "")
        sum = value
    else if (check === true) {
        check = false
    }
    else if (value != "") {
        if (operator === '+')
            sum = parseInt(sum) + parseInt(value)
        else if (operator === '-')
            sum = sum - value
        else if (operator === '*')
            sum = sum * value
        else if (operator === '/')
            sum = sum / value
        $("#display").attr('value', sum)
    }
    value = ""
    operator = operatorList[0]
})
$(" #subtractButton ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    if (sum === "")
        sum = value
    else if (check === true) {
        check = false
    }
    else if (value != "") {
        if (operator === '+')
            sum = parseInt(sum) + parseInt(value)
        else if (operator === '-')
            sum = sum - value
        else if (operator === '*')
            sum = sum * value
        else if (operator === '/')
            sum = sum / value
        $("#display").attr('value', sum)
    }
    value = ""
    operator = operatorList[1]
})
$(" #multiplyButton ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    if (sum === "")
        sum = value
    else if (value != "") {
        if (operator === '+')
            sum = parseInt(sum) + parseInt(value)
        else if (operator === '-')
            sum = sum - value
        else if (operator === '*')
            sum = sum * value
        else if (operator === '/')
            sum = sum / value
        $("#display").attr('value', sum)
    }
    value = ""
    operator = operatorList[2]
})
$(" #divideButton ").click(function() {
    if (check != false) {
        value = ""
        check = false
    }
    if (sum === "")
        sum = value
    else if (value != "") {
        if (operator === '+')
            sum = parseInt(sum) + parseInt(value)
        else if (operator === '-')
            sum = sum - value
        else if (operator === '*')
            sum = sum * value
        else if (operator === '/')
            sum = sum / value
        $("#display").attr('value', sum)
    }
    value = ""
    operator = operatorList[3]
})
$(" #equalsButton ").click(function() {
    if (operator != "" && value != "") {
        if (operator === '+')
            sum = parseInt(sum) + parseInt(value)
        else if (operator === '-')
            sum = sum - value
        else if (operator === '*')
            sum = sum * value
        else if (operator === '/')
            sum = sum / value
        check = true
        $("#display").attr('value', sum)
    }
})
$(" #clearButton").click(function() {
    sum = ""
    $("#display").attr('value', sum)
})