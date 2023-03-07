const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  const text = tutorials.map((lectures)=>{
  const split = lectures.split(" ")
  const newArray = split.map(words=>words.charAt(0).toUpperCase()+words.slice(1))
  const join = newArray.join(" ")
  return join
  })
  return text
}