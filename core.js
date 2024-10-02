//Api Access
const api_key = "a26ea2368cd2b40d53cdec50"
const url = "https://v6.exchangerate-api.com/v6/" + api_key
//elements access
const currency_one = document.getElementById("currency_one");
const currency_two = document.getElementById("currency_two");
const list_one = document.getElementById("list_one");
const list_two = document.getElementById("list_two");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
//Api search
fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes;
        let options;
        for (let item of items) {
            options += `<option value=${item[0]}>${item[1]}</option>`;
        }
        list_one.innerHTML = options;
        list_two.innerHTML = options;
    });
calculate.addEventListener("click", function () {
    const fromMoney = currency_one.value;
    const toMoney = currency_two.value;
    const amountMoney = amount.value;

    console.log(fromMoney, toMoney, amountMoney);

    fetch(url + "/latest/" + fromMoney)
        .then(res => res.json())
        .then(data => {
            const calcMoney =(data.conversion_rates[toMoney]*amountMoney).toFixed(3);
            result.innerHTML =`
            <div class="card border-danger">
                <div class="card-body text-center" style="font-size: 30px;">
                    ${amountMoney} ${fromMoney} = ${calcMoney} ${toMoney}
                </div>
            </div>
        `;
                // data.conversion_rates[toMoney]*amountMoney

        });

});   