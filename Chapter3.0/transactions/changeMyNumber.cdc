import HelloWorld from 0xf8d6e0586b0a20c7

transaction(updatedNumber: Int) {
    prepare(account: AuthAccount) {
        log(
            "Changing my number from "
            .concat(HelloWorld.myNumber.toString())
            .concat(" to ")
            .concat(myNumber.toString())
        )

        HelloWorld.updateMyNumber(newNumber: updatedNumber)

        log("Done!")
    }

    execute {
    
    }
}