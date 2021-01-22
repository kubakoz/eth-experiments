const HelloWorld = artifacts.require('HelloWorld');

contract("HelloWorld", (accounts)=>{

    it("should return my name", async () => {

        const instance = await HelloWorld.deployed();
        const value = await instance.getMyName.call();

        assert.equal(value, "Kubakoz");

    })

    it("should update my name ", async () => {

        const instance = await HelloWorld.deployed();
        await instance.changeMyName("Kuba");
        const value = await instance.getMyName.call();

        assert.equal(value, "Kuba");
    })
})