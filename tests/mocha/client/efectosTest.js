if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Efecto - Extra Attack", function(){
      it("should give (n) extra attack", function(){
        var attackRequest = [2,3];
        var attackResponse = CharStats.efectos.extraAttack(attackRequest, 2);
        chai.assert.equal(attackResponse.length, 4);

        var attackRequest = [2];
        var attackResponse = CharStats.efectos.extraAttack(attackRequest, 1);
        chai.assert.equal(attackResponse.length, 2);

        var attackRequest = [2,3];
        var attackResponse = CharStats.efectos.extraAttack(attackRequest, 5);
        chai.assert.equal(attackResponse.length, 7);
      });
    });
  });
}
