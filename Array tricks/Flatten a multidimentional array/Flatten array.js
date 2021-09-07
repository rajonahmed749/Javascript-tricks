const Mentors = [["W3schools","MDN","Programming Hero"], ["Jhankar Mahbub",["Rocky", "Shakib", "Mejbah", "Israfil"]], "Hasin Hyder", "Sumit Saha", "HM Nayeem"]

// We can use flat method to flatten one level array
console.log(Mentors.flat())

//  for multi level array we have to pass argument Infinity in the flat property
console.log(Mentors.flat(Infinity))
