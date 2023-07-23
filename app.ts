const a = document.getElementById('num1') as HTMLInputElement
const b = document.getElementById('num2') as HTMLInputElement
const btn = document.querySelector('button')!

type numOrString = number|String

type resObj = {value :number ; timestamp : Date}
interface resObjI {
    value :number ; timestamp : Date
}

function addTowNums(a:numOrString ,b:number|string){
   
     if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a+b;
     }else if(typeof(a) === 'string' && typeof(b) === 'string'){
        return a +''+b
     }else{
        return +a + +b
     }
}

const numRes : Array<number>= []
const strResult : string[] = []

function printRes( resultObj :resObj){
    console.log(resultObj.value)
}

console.log(addTowNums(1,2))

//console.log(addTowNums("1","2"

btn.addEventListener('click' ,(e)=>{
    const n1 = a.value;
    const n2 = b.value
    const res = addTowNums(+n1,+n2);
    console.log(res)
    numRes.push(res as number)
    const strRes = addTowNums(n1,n2)
    strResult.push(strRes as string)
    console.log(strRes)


})

const myPromise = new Promise((res,rej)=>{

    setTimeout(()=>{
     res("It worked")
    },2000)
})

myPromise.then((res)=>{
    console.log(res)
})