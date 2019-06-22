  // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
      /*  
          Filter filters the array data, extracting values that evaluate in your
          expression to false, and returns those that evaluate to true.
      */
    const fifteen = inventors.filter((inventor) => {
      return inventor.year >= 1500 && inventor.year < 1600
    });
    console.table(fifteen)

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    /*  
        Takes in an array and returns a new one, applying some set logic to it. 
        Returned array is of same length as original. 
    */
    const fullNames = inventors.map((inventor) => {
      return `${inventor.first} ${inventor.last}`
    });
    console.table(fullNames)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
     /*  
        Sort two items, relating them to one another, returning either 1 or -1. 1 results
        in it being greater, -1 less.
     */
    const ordered = inventors.sort((firstPerson, secondPerson) => {
      if(firstPerson.year > secondPerson.year) {
        return 1
      } else {
        return -1
      }
    });
    console.table(ordered)

    const orderedAlternate = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
    console.table(orderedAlternate)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    /*  
        Same premise as a for loop that after each result, creates a summation of some values.
        Iterable logic that sums up a value or combined total of elements in that array.
        Two args: total, individual iterable (from arr)
        NOTE have to pass in a start value, generally 0, after callback
    */
    const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year)
    }, 0);
    console.log({totalYears})


    // 5. Sort the inventors by years lived
    const oldest = inventors.sort((a,b) => {
      const last = a.passed - a.year;
      const next = b.passed - b.year;
      return last > next ? 1 : -1;
    });
    console.log(oldest)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));

    // const de = links
    //               .map(link => link.textcontent)
    //               .filter(link => link.includes('de'))
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
      const [ alast, afirst ] = lastOne.split(', ')
      const [ blast, bfirst ] = nextOne.split(', ')
      return alast > blast ? 1 : -1;
    });
    console.log(alpha)

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce((obj, item) => {
      if(!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++
      return obj
    }, {});

    console.log(transportation)