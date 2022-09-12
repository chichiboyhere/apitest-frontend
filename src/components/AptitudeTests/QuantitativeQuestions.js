
  const questions = [
    {
      id: "Q1",
      text: `What is the average of the first six multiples of 14?`,
      options: [
        { id: 0, text: "49", isCorrect: true },
        { id: 1, text: "56", isCorrect: false },
        { id: 2, text: "28", isCorrect: false },
        { id: 3, text: "42", isCorrect: false },
      ],
      answer: "49",
    },
    {
      id: "Q2",
      text: `What is the difference in the place value of 2 in the number 12324628?`,
      options: [
        { id: 0, text: "19980", isCorrect: true },
        { id: 1, text: "20020", isCorrect: false },
        { id: 2, text: "20000", isCorrect: false },
        { id: 3, text: "19800", isCorrect: false },
      ],
      answer: "19980",
    },
    {
      id: "Q3",
      text: `How much simple interest accrues on a sum of N50 000 saved at a rate of 2% per annum for 4 years?`,
      options: [
        { id: 0, text: "N2500", isCorrect: false },
        { id: 1, text: "N4000", isCorrect: true },
        { id: 2, text: "N5000", isCorrect: false },
        { id: 3, text: "N3000", isCorrect: false },
      ],
      answer: "N4000",
    },
    {
      id: "Q4",
      text: `Sade bought 60 oranges for N800 and sold them in heaps of 3 at N50 per heap. Calculate her percentage profit or loss.`,
      options: [
        { id: 0, text: "20%", isCorrect: false },
        { id: 1, text: "25%", isCorrect: true },
        { id: 2, text: "15%", isCorrect: false },
        { id: 3, text: "30%", isCorrect: false },
      ],
      answer: "25%",
    },
    {
      id: "Q5",
      text: `Sonny is twice as old as Wale. Four years ago, he was four times as old as Wale. When will the sum of their ages be 66? [WASSCE]`,
      options: [
        { id: 0, text: "28 years", isCorrect: false },
        { id: 1, text: "15 years", isCorrect: false },
        { id: 2, text: "22 years", isCorrect: false },
        { id: 3, text: "24 years", isCorrect: true },
      ],
      answer: "24 years",
    },
    {
      id: "Q6",
      text: `∫
		   4
		   x
		   cos
		   (
		   2
		   −
		   3
		   x
		   )
		   d
		   x`,
      options: [
        {
          id: 0,
          text: `−
			 4
			 /
			 3
			 x
			 sin
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 4
			 /
			 9
			 cos
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 c
			 `,
          isCorrect: true,
        },
        {
          id: 1,
          text: `−
			 4
			 /
			 3
			 x
			 sin
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 4
			 /
			 9
			 sin
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 c
			 `,
          isCorrect: false,
        },
        {
          id: 2,
          text: `−
			 4
			 /
			 3
			 x
			 sin
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 4
			 /
			 9
			
			 +
			 c
			 `,
          isCorrect: false,
        },
        {
          id: 3,
          text: `−
			 4
			 /
			 3
			 x
			 cos
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 4
			 /
			 9
			 cos
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 c
			 `,
          isCorrect: false,
        },
      ],
      answer: `−
			 4
			 /            
			 3
			 x
			 sin
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 4
			 /
			 9
			 cos
			 (
			 2
			 −
			 3
			 x
			 )
			 +
			 c
		   `,
    },
    {
      id: "Q7",
      text: `If a:b = 3:2 and b:c = 3:1, find a:c`,
      options: [
        { id: 0, text: "5:2", isCorrect: false },
        { id: 1, text: "9:2", isCorrect: true },
        { id: 2, text: "3:2", isCorrect: false },
        { id: 3, text: "7:2", isCorrect: false },
      ],
      answer: "9:2",
    },
    {
      id: "Q8",
      text: `A rectangle whose length and breath are 6m and 5m respectively, is mistakenly measured as 5.9m by 4.9m. What is the percentage error in the measurement of the area of the rectangle?`,
      options: [
        { id: 0, text: "3.33 %", isCorrect: false },
        { id: 1, text: "3.63 %", isCorrect: true },
        { id: 2, text: "3.00 %", isCorrect: false },
        { id: 3, text: "3.13 %", isCorrect: false },
      ],
      answer: "3.63 %",
    },
    {
      id: "Q9",
      text: `Simplify 2 5/12 - 1 7/8 * 4/5`,
      options: [
        { id: 0, text: "1/12", isCorrect: false },
        { id: 1, text: "11/12", isCorrect: true },
        { id: 2, text: "5/12", isCorrect: false },
        { id: 3, text: "7/12", isCorrect: false },
      ],
      answer: "11/12",
    },
    {
      id: "Q10",
      text: `Write down the number 0.0052032, correct to three significant figures`,
      options: [
        { id: 0, text: "520", isCorrect: false },
        { id: 1, text: "0.00520", isCorrect: true },
        { id: 2, text: "0.005", isCorrect: false },
        { id: 3, text: "0.00530", isCorrect: false },
      ],
      answer: "0.00520",
    },
    {
      id: "Q11",
      text: `A 50m high pole is between two points A and B such that the foot F of the pole is horizontally level with A and B. The angle of depression of A from the top of the pole is 30°. The distance
		   between A and B is 115.5m. Find the angle of depression of B from T.`,
      options: [
        { id: 0, text: "60°", isCorrect: true },
        { id: 1, text: "30°", isCorrect: false },
        { id: 2, text: "90°", isCorrect: false },
        { id: 3, text: "50°", isCorrect: false },
      ],
      answer: "60°",
    },
    {
      id: "Q12",
      text: `Two points A and B, 27.4m apart are on the same horizontal level with the foot F of a pole.The angles of elevation of the top T of the pole
		   from A and B are 30° and 45° respectively. If the pole is somewhere between the points A and B, find its height.`,
      options: [
        { id: 0, text: "10m", isCorrect: true },
        { id: 1, text: "17m", isCorrect: false },
        { id: 2, text: "20m", isCorrect: false },
        { id: 3, text: "22m", isCorrect: false },
      ],
      answer: "10m",
    },
    {
      id: "Q13",
      text: `Two ships leave the same port. One ship sails 350km on a bearing of 150°. The other ship sails 400km on a bearing of 240°. The distance between the ships, correct to 1 d.p, is...`,
      options: [
        { id: 0, text: "500.5km", isCorrect: false },
        { id: 1, text: "100.5km", isCorrect: false },
        { id: 2, text: "531.5km", isCorrect: true },
        { id: 3, text: "231.5km", isCorrect: false },
      ],
      answer: "531.5km",
    },
    {
      id: "Q14",
      text: `The bearings of the Infirmary and Gym from Kalu’s home are 055° and 015°. Kalu jugs from his home to the Infirmary and then jugs to the
		   Gym on a bearing of 275°, covering a total distance of 805m. How far is his home from the Gym correct to the nearest metre?`,
      options: [
        { id: 0, text: "300m", isCorrect: false },
        { id: 1, text: "330m", isCorrect: false },
        { id: 2, text: "320m", isCorrect: false },
        { id: 3, text: "318m", isCorrect: true },
      ],
      answer: "318m",
    },
    {
      id: "Q15",
      text: `Tinuke drives a distance of 100m downhill thereby losing a height of 60m. What is the slope of the hill to the horizontal? (Express your answer in degrees
		   and minutes).`,
      options: [
        { id: 0, text: "56°55'", isCorrect: false },
        { id: 1, text: "16°53'", isCorrect: false },
        { id: 2, text: "26°5'", isCorrect: false },
        { id: 3, text: "36°53'", isCorrect: true },
      ],
      answer: "36°53'",
    },
    {
      id: "Q16",
      text: `A bag contains 16 red and 20 blue balls only. How many white balls must be added to the bag so that the probability of randomly picking a red ball is equal to 2/5?`,
      options: [
        { id: 0, text: "4", isCorrect: true },
        { id: 1, text: "8", isCorrect: false },
        { id: 2, text: "12", isCorrect: false },
        { id: 3, text: "6", isCorrect: false },
      ],
      answer: "4",
    },
    {
      id: "Q17",
      text: `Find the probability that a number picked at random from the set {43, 44, 45, ... 60} is a prime number. (UTME)`,
      options: [
        { id: 0, text: "1/9", isCorrect: false },
        { id: 1, text: "5/9", isCorrect: false },
        { id: 2, text: "1/9", isCorrect: false },
        { id: 3, text: "2/9", isCorrect: true },
      ],
      answer: "2/9",
    },
    {
      id: "Q18",
      text: `The mean and range of the set of numbers 1.20, 1.50, 1.20, 0.90, 1.40, 1.30, 0.70 and 1.40 are m and r respectively. find m + r.`,
      options: [
        { id: 0, text: "2.2", isCorrect: false },
        { id: 1, text: "0.8", isCorrect: false },
        { id: 2, text: "2.0", isCorrect: true },
        { id: 3, text: "1.2", isCorrect: false },
      ],
      answer: "2.0",
    },
    {
      id: "Q19",
      text: `The variance of the numbers 2, 3, 4, 5, 6 is ...`,
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "5", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "2", isCorrect: true },
      ],
      answer: "2",
    },
    {
      id: "Q20",
      text: `A thread is tightly wound round a square stick whose cross-sectional area is 4 sq.cm. Suppose the thread goes
		   round the stick 20 complete times, calculate the length of the thread.`,
      options: [
        { id: 0, text: "140cm", isCorrect: false },
        { id: 1, text: "120cm", isCorrect: false },
        { id: 2, text: "150cm", isCorrect: false },
        { id: 3, text: "160cm", isCorrect: true },
      ],
      answer: "160cm",
    },
    {
      id: "Q21",
      text: `A circle is inscribed in a square of side 7cm. By how much does the area of the square exceed the area of the circle? (Take p = 22/7)`,
      options: [
        { id: 0, text: "12.4 sq.cm", isCorrect: false },
        { id: 1, text: "7.5 sq.cm", isCorrect: false },
        { id: 2, text: "11.5 sq.cm", isCorrect: false },
        { id: 3, text: "10.5 sq.cm", isCorrect: true },
      ],
      answer: "10.5 sq.cm",
    },
    {
      id: "Q22",
      text: `In a market place 7 people sell mangoes, 11 sell bananas while 3 sell both fruits. How many sellers are in the market place?`,
      options: [
        { id: 0, text: "20", isCorrect: false },
        { id: 1, text: "12", isCorrect: false },
        { id: 2, text: "15", isCorrect: true },
        { id: 3, text: "25", isCorrect: false },
      ],
      answer: "15",
    },
    {
      id: "Q23",
      text: `All the 150 pupils in a school learn Igbo or Hausa or both. Given that 100 learn Hausa and 70 learn Igbo. How many learn both languages?`,
      options: [
        { id: 0, text: "20", isCorrect: true },
        { id: 1, text: "12", isCorrect: false },
        { id: 2, text: "15", isCorrect: false },
        { id: 3, text: "25", isCorrect: false },
      ],
      answer: "20",
    },
    {
      id: "Q24",
      text: `How many sides has a regular polygon whose exterior angle is 30°?`,
      options: [
        { id: 0, text: "20", isCorrect: false },
        { id: 1, text: "12", isCorrect: true },
        { id: 2, text: "15", isCorrect: false },
        { id: 3, text: "25", isCorrect: false },
      ],
      answer: "12",
    },
    {
      id: "Q25",
      text: `Which of the following is not a measure of dispersion? (WASSCE)`,
      options: [
        { id: 0, text: "Range", isCorrect: false },
        { id: 1, text: "Mean Deviation", isCorrect: false },
        { id: 2, text: "Mean", isCorrect: true },
        { id: 3, text: "Standard Deviation", isCorrect: false },
      ],
      answer: "Mean",
    },
    {
      id: "Q26",
      text: `Find the mean deviation of the following data 3, 2, 4, 2, 6, 5.`,
      options: [
        { id: 0, text: "1.2", isCorrect: false },
        { id: 1, text: "1.33", isCorrect: true },
        { id: 2, text: "1.4", isCorrect: false },
        { id: 3, text: "1.05", isCorrect: false },
      ],
      answer: "1.33",
    },
    {
      id: "Q27",
      text: `Two numbers are chosen at random from three numbers 1, 3, 6. Find the probability that the sum of the two is not odd. (UME)`,
      options: [
        { id: 0, text: "1/2", isCorrect: false },
        { id: 1, text: "1/5", isCorrect: false },
        { id: 2, text: "1/4", isCorrect: false },
        { id: 3, text: "1/3", isCorrect: true },
      ],
      answer: "1/3",
    },
    {
      id: "Q28",
      text: `Out of 30 candidates applying for a post, 17 have degrees, 15 diplomas and 4 neither degree nor diploma. How many of them have both? [WASSCE]`,
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "6", isCorrect: true },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "3", isCorrect: false },
      ],
      answer: "6",
    },
    {
      id: "Q29",
      text: `Two sets are disjoint if`,
      options: [
        { id: 0, text: "their union is an empty set", isCorrect: false },
        { id: 1, text: "their intersection is an empty set", isCorrect: true },
        { id: 2, text: "they are both empty", isCorrect: false },
        {
          id: 3,
          text: "One of them is a subset of the other",
          isCorrect: false,
        },
      ],
      answer: "their intersection is an empty set",
    },
    {
      id: "Q30",
      text: `Driving at x km/h, it takes a motorist 5 hours to cover a given distance. If he goes 15km/h faster, he covers the distance 1 hour less. Find x.`,
      options: [
        { id: 0, text: "90km/h", isCorrect: false },
        { id: 1, text: "40km/h", isCorrect: false },
        { id: 2, text: "50km/h", isCorrect: false },
        { id: 3, text: "60km/h", isCorrect: true },
      ],
      answer: "60km/h",
    },
    {
      id: "Q31",
      text: `In a family of 21 people, the average age is 14 years. If age of the grandfather is not counted, the average age drops to 12 years. What is the age of the grandfather? (UME)`,
      options: [
        { id: 0, text: "66", isCorrect: false },
        { id: 1, text: "62", isCorrect: false },
        { id: 2, text: "54", isCorrect: true },
        { id: 3, text: "77", isCorrect: false },
      ],
      answer: "54",
    },
    {
      id: "Q32",
      text: `If two dice are thrown together, what is the probability of obtaining at least a score of 10? (UME)`,
      options: [
        { id: 0, text: "1/6", isCorrect: true },
        { id: 1, text: "1/3", isCorrect: false },
        { id: 2, text: "1/2", isCorrect: false },
        { id: 3, text: "5/6", isCorrect: false },
      ],
      answer: "1/6",
    },
    {
      id: "Q33",
      text: `The variance of the scores 1,2,3, 4,5 is (UME)`,
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "2", isCorrect: true },
      ],
      answer: "2",
    },
    {
      id: "Q34",
      text: `The angles of a pentagon exceed one another by 10°. Find the least angle`,
      options: [
        { id: 0, text: "86°", isCorrect: false },
        { id: 1, text: "88°", isCorrect: true },
        { id: 2, text: "80°", isCorrect: false },
        { id: 3, text: "82°", isCorrect: false },
      ],
      answer: "88°",
    },
    {
      id: "Q35",
      text: `Find the number of sides of a regular polygon whose interior angle is twice the exterior angle.`,
      options: [
        { id: 0, text: "16", isCorrect: false },
        { id: 1, text: "26", isCorrect: false },
        { id: 2, text: "36", isCorrect: false },
        { id: 3, text: "6", isCorrect: true },
      ],
      answer: "6",
    },
    {
      id: "Q36",
      text: `Find the interest obtainable by saving N5000 at 5% per annum simple interest for 1 year and 6 months.`,
      options: [
        { id: 0, text: "N400", isCorrect: false },
        { id: 1, text: "N375", isCorrect: true },
        { id: 2, text: "N500", isCorrect: false },
        { id: 3, text: "N250", isCorrect: false },
      ],
      answer: "N375",
    },
    {
      id: "Q37",
      text: `Ana, Brenda and Camila share 65 bananas such that Brenda gets twice as many bananas as Ana and one and a half as many bananas as Camila. How many bananas does Brenda get?`,
      options: [
        { id: 0, text: "60", isCorrect: false },
        { id: 1, text: "45", isCorrect: false },
        { id: 2, text: "30", isCorrect: true },
        { id: 3, text: "50", isCorrect: false },
      ],
      answer: "30",
    },
    {
      id: "Q38",
      text: `A shopkeeper sold an item for N4 800, making a profit of 20%. Find the original cost of the item.`,
      options: [
        { id: 0, text: "N4000", isCorrect: true },
        { id: 1, text: "N3600", isCorrect: false },
        { id: 2, text: "N4300", isCorrect: false },
        { id: 3, text: "N4200", isCorrect: false },
      ],
      answer: "N4000",
    },
    {
      id: "Q39",
      text: `Four men do a piece of work in 12 days. How many days do 6 men, working at the same rate, do the work?`,
      options: [
        { id: 0, text: "11 days", isCorrect: false },
        { id: 1, text: "10 days", isCorrect: false },
        { id: 2, text: "8 days", isCorrect: true },
        { id: 3, text: "12 days", isCorrect: false },
      ],
      answer: "8 days",
    },
    {
      id: "Q40",
      text: `The sum of the exterior angles of an n-sided convex polygon is half the sum of its interior angles. Find n.(WASSCE)`,
      options: [
        { id: 0, text: "8", isCorrect: false },
        { id: 1, text: "6", isCorrect: true },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "10", isCorrect: false },
      ],
      answer: "6",
    },
    {
      id: "Q41",
      text: `The fifth term of the sequence 1, 21, 51, 91.... is`,
      options: [
        { id: 0, text: "101", isCorrect: false },
        { id: 1, text: "121", isCorrect: false },
        { id: 2, text: "131", isCorrect: false },
        { id: 3, text: "141", isCorrect: true },
      ],
      answer: "141",
    },
    {
      id: "Q42",
      text: `The sum of the series 1+7+13+19+.... to 28 terms`,
      options: [
        { id: 0, text: "4592", isCorrect: false },
        { id: 1, text: "2296", isCorrect: true },
        { id: 2, text: "2268", isCorrect: false },
        { id: 3, text: "1968", isCorrect: false },
      ],
      answer: "2296",
    },
    {
      id: "Q43",
      text: `How many multiples of 4 lie between 200 and 600 (inclusive)?`,
      options: [
        { id: 0, text: "121", isCorrect: false },
        { id: 1, text: "98", isCorrect: false },
        { id: 2, text: "101", isCorrect: true },
        { id: 3, text: "100", isCorrect: false },
      ],
      answer: "101",
    },
    {
      id: "Q44",
      text: `The second term of a geometric series is 4 while the fourth term is 16. Find the sum of the first five terms. (WASSCE)`,
      options: [
        { id: 0, text: "62", isCorrect: true },
        { id: 1, text: "66", isCorrect: false },
        { id: 2, text: "68", isCorrect: false },
        { id: 3, text: "64", isCorrect: false },
      ],
      answer: "62",
    },
    {
      id: "Q45",
      text: `The 3rd and 6th terms of a G.P are –1 and –1/64 respectively. Find the G.P`,
      options: [
        { id: 0, text: "-16,-2,-1/4,-1/32...", isCorrect: false },
        { id: 1, text: "-16,-8,-4,-2...", isCorrect: false },
        { id: 2, text: "-16,-4,-1,-1/4...", isCorrect: true },
        { id: 3, text: "-16,-8/3,-4/9,-2/27...", isCorrect: false },
      ],
      answer: "-16,-4,-1,-1/4...",
    },
    {
      id: "Q46",
      text: `If y varies directly as the square root of x and y = 3 when x = 16, calculate y when x = 64 (UTME)`,
      options: [
        { id: 0, text: "12", isCorrect: false },
        { id: 1, text: "6", isCorrect: true },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "2", isCorrect: false },
      ],
      answer: "6",
    },
    {
      id: "Q47",
      text: `y is inversely proportional to x and y = 4 when x = 1/2. Find x when y = 10 (UTME)`,
      options: [
        { id: 0, text: "1/2", isCorrect: false },
        { id: 1, text: "1/3", isCorrect: false },
        { id: 2, text: "1/5", isCorrect: true },
        { id: 3, text: "1/4", isCorrect: false },
      ],
      answer: "1/5",
    },
    {
      id: "Q48",
      text: `p is partly constant and partly varies as the square root of q. If p = 15 when q = 25 and p = 19 when q = 49, find p when q = 81`,
      options: [
        { id: 0, text: "23", isCorrect: true },
        { id: 1, text: "47", isCorrect: false },
        { id: 2, text: "25", isCorrect: false },
        { id: 3, text: "32", isCorrect: false },
      ],
      answer: "23",
    },
    {
      id: "Q49",
      text: `List all integers satisfying the inequality -2 < 2x - 8 < 4`,
      options: [
        { id: 0, text: "3,4,5,6", isCorrect: false },
        { id: 1, text: "3,4,5", isCorrect: false },
        { id: 2, text: "4,5", isCorrect: true },
        { id: 3, text: "3", isCorrect: false },
      ],
      answer: "4,5",
    },
    {
      id: "Q50",
      text: `Find the value of x satisfying x/2 - 1/3 < 2x/5 + 1/6 (UME)`,
      options: [
        { id: 0, text: "x > 5", isCorrect: false },
        { id: 1, text: "x < 6", isCorrect: false },
        { id: 2, text: "x > 8", isCorrect: false },
        { id: 3, text: "x < 5", isCorrect: true },
      ],
      answer: "x < 5",
    },
  ];
  export default questions