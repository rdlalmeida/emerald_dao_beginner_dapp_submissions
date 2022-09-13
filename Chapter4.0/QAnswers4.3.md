Q1. Code for the function that establishes a function call with several data types and retunrs a random element from the set:

```javascript
async function testTypes() {
    const randomIndex = Math.floor(Math.random() * 8);

    const response = await fcl.query({
      cadence: `
      pub fun main(
        a: Int,
        b: String,
        c: UFix64,
        d: Address,
        e: Bool,
        f: String?,
        g: [Int],
        h: {String: Address},
        index: Int
      ): AnyStruct {
        // Start by assembling every input into a single array
        let input_array: [AnyStruct] = [a, b, c, d, e, f, g, h]

        // Check the validity of the index provided:
        if (index < 0 || index >= input_array.length) {
          panic(
            "Invalid index provided: "
            .concat(index.toString())
            .concat(". Please provide an integer between 0 and ")
            .concat((input_array.length - 1).toString())
            .concat(" to continue")
            )
        }

        // Return the element whose index was provided as the last argument
        return input_array[index]
      }
      `,
      args: (arg, t) => [
        arg('25', t.Int),
        arg('Does this work at all?', t.String),
        arg('14.33', t.UFix64),
        arg('0xb7fb1e0ae6485cf6', t.Address),
        arg(false, t.Bool),
        arg(null, t.Optional(t.String)),
        arg([5, 4, 9], t.Array(t.Int)),
        arg(
          [
            {key: 'Blocto', value: '0x82dd07b1bcafd968'},
            {key: 'Dapper', value: '0x37f3f5b3e0eaf6ca'}
          ], t.Dictionary({key: t.String, value: t.Address})
        ),
        arg(randomIndex, t.Int)
      ]
    })

    // Print out whatever was returned as a response
    console.log("The " + (randomIndex - 1).toString() + "-th element of the type array is " + response)
  }

  // Set the useEffect method to return a different, random type everytime the page is refreshed
  useEffect(() => {
    // executeScript()
    // readSimpleTest()
    testTypes()
  }, [])
```

Output from this code:

![image](https://user-images.githubusercontent.com/39467168/190000855-905ca63b-d8c7-4eaf-9ee4-588bb1a80821.png)
