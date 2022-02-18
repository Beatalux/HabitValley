console.log("hello")

const data = {
    category: "language",
    id: 2,
    title: "20 words a day",
    type: "community",
    frequency: "daily",
    member: "33",
    startDate: "Today",
    price: "Free",
    coach: false
}

// const title = data.title
// const price = data.price
// const frequency = data.frequency

const {title,frequency,price}=data
console.log(title, price, frequency)

const newData={...data, image:"test"}//...이 {}를 없앰(풀어헤친다!)
console.log(newData)

const arr=[1,2,3,4]
// const one=arr[0]
// const two=arr[1]

const [one,two]=arr
console.log(one,two)

const newArr=[100,...arr]
console.log(newArr)