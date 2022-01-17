let name = prompt (`Ведіть своє ім'я`)
alert (`Привіт,` + name + `. Це мій перший калькулятор і я хочу допомогти тобі вирішити приклад)`)
let diya = prompt(`Виберіть дію: додавання, віднімання, множення, ділення, піднесення до степеня`)
if (diya == `додавання`) {
    let dodavannya_chislo_1 = Number(prompt (`Введіть перше число:`)) 
    let dodavannya_chislo_2 = Number(prompt (`Введіть друге число:`))
    alert (dodavannya_chislo_1+dodavannya_chislo_2);
} else {
    let diya_2 = prompt(`Я зрозумів, що Вам не підходить додавання. Виберіть іншу дію: віднімання, множення, ділення, піднесення до степеня`)
    if (diya_2 == `віднімання`) {
        let dodavannya_chislo_3 = Number(prompt (`Введіть перше число:`)) 
        let dodavannya_chislo_4 = Number(prompt (`Введіть друге число:`))
        alert (dodavannya_chislo_3-dodavannya_chislo_4);
    } else {
        let diya_3 = prompt(`Я зрозумів, що Вам не підходить віднімання. Виберіть іншу дію: множення, ділення, піднесення до степеня`)
        if (diya_3 == `множення`) {
            let dodavannya_chislo_5 = Number(prompt (`Введіть перше число:`)) 
            let dodavannya_chislo_6 = Number(prompt (`Введіть друге число:`))
            alert (dodavannya_chislo_5*dodavannya_chislo_6);
        } else {
            let diya_4 = prompt(`Я зрозумів, що Вам не підходить множення. Виберіть іншу дію: ділення, піднесення до степеня`)
            if (diya_4 == `ділення`) {
                let dodavannya_chislo_7 = Number(prompt (`Введіть перше число:`)) 
                let dodavannya_chislo_8 = Number(prompt (`Введіть друге число:`))
                alert (dodavannya_chislo_7/dodavannya_chislo_8);
            } else {
                let dodavannya_chislo_9 = Number(prompt (`Введіть перше число:`)) 
                let dodavannya_chislo_10 = Number(prompt (`Введіть друге число:`))
                alert (dodavannya_chislo_9**dodavannya_chislo_10);
            }
        }
    }
}
let message = alert (`Дякую, що скористався моїм калькулятором)`)
let a = alert (`Я хочу вивчати js` + `, після чого стану крутим програмістом!`)