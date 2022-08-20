// variable int
const income = document.getElementById('income');

const food = document.getElementById('food');

const rent = document.getElementById('rent');

const cloth = document.getElementById('cloth');

const totalExpense = document.getElementById('total-expense');

const blance = document.getElementById('blance');

const dicountSave = document.getElementById('save');

const saveBalance = document.getElementById('save-blance');

const remaingBlance = document.getElementById('remaing-blance');


// calculate

function calculate() {

    if (validate('cal')) {

        const totalCost = parseFloat(food.value) +
            parseFloat(rent.value) +
            parseFloat(cloth.value);

        if (totalCost > income.value) {

            error('Your cost over of income');

        } else {

            totalExpense.innerText = totalCost;
            blance.innerText = parseFloat(income.value) - totalCost;

        }

    }
}


// validate
function validate(type) {

    if (type == 'cal') {
        if (income.value == '') {

            error('Plese input your income');

        } else if (isNaN(income.value)) {

            error('Plese input number value');
        }
        else if (food.value == '') {
            error('Plese input your food cost');

        } else if (isNaN(food.value)) {

            error('Plese input number value');
        } else if (rent.value == '') {
            error('Plese input your rent cost');

        } else if (isNaN(rent.value)) {

            error('Plese input number value');
        } else if (cloth.value == '') {
            error('Plese input your cloth cost');

        } else if (isNaN(cloth.value)) {

            error('Plese input number value');
        } else {
            return true;
        }
    } else {

        if (dicountSave.value == '') {

            error('Please enter discount perchent');

        } else if (dicountSave.value > 100) {

            error('Max discount 100%');

        } else {
            return true;
        }
    }
}

// discount
function discount() {

    if (validate('discount')) {
        const saveAmount = perchent(dicountSave.value, income.value);
        saveBalance.innerText = saveAmount;

        const costAmount = parseFloat(food.value) +
            parseFloat(rent.value) +
            parseFloat(cloth.value);

        const currentBalance = parseFloat(income.value) - costAmount;

        const finalAmount = currentBalance - saveAmount;

        remaingBlance.innerText = finalAmount;
        success('Your Remaining Blance ' + finalAmount);

    }


}

// error
function error(title) {
    Swal.fire({
        position: 'bottom-center',
        icon: 'error',
        title: title,
        showConfirmButton: false,
        timer: 1500
    });
}

// success
function success(text) {
    Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: text,
        footer: false
    })
}

// perchent
function perchent(perchent, amount) {

    const rate = parseFloat(perchent) / 100;
    const result = rate * parseFloat(amount);
    return result;

}