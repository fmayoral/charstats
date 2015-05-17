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

  MochaWeb.testOnly(function(){
    describe("Efecto - Modifica Bonus de Ataque", function(){
      it("should give (n) bonus to all attacks", function(){
        var attackRequest = [2, 3];
        var attackResponse = CharStats.efectos.modAttackBonus(attackRequest, 2);
        chai.assert.deepEqual(attackResponse, [4, 5]);

        var attackRequest = [2];
        var attackResponse = CharStats.efectos.modAttackBonus(attackRequest, 1);
        chai.assert.deepEqual(attackResponse, [3]);

        var attackRequest = [2, 3];
        var attackResponse = CharStats.efectos.modAttackBonus(attackRequest, -1);
        chai.assert.deepEqual(attackResponse, [1, 2]);
      });
    });
  });

  MochaWeb.testOnly(function(){
    describe("Efecto - Modifica Bonificador de Daño", function(){
      it("should give (n) bonus to all damages", function(){
        var weaponRequest =[{'otro_atributo': false,'bonificador': 2 },{'otro_atributo': false,'bonificador': 0 }];
        var weaponExpectedResponse =[{'otro_atributo': false,'bonificador': 4 },{'otro_atributo': false,'bonificador': 2 }];
        var weaponResponse = CharStats.efectos.modDamageBonus(weaponRequest, 2);
        chai.assert.deepEqual(weaponResponse, weaponExpectedResponse);


        var weaponRequest =[{'otro_atributo': false,'bonificador': 1 }];
        var weaponExpectedResponse =[{'otro_atributo': false,'bonificador': 2 }];
        var weaponResponse = CharStats.efectos.modDamageBonus(weaponRequest, 1);
        chai.assert.deepEqual(weaponResponse, weaponExpectedResponse);

        var weaponRequest =[{'otro_atributo': false,'bonificador': 0 },{'otro_atributo': false,'bonificador': 2 }];
        var weaponExpectedResponse =[{'otro_atributo': false,'bonificador': -1 },{'otro_atributo': false,'bonificador': 1 }];
        var weaponResponse = CharStats.efectos.modDamageBonus(weaponRequest, -1);
        chai.assert.deepEqual(weaponResponse, weaponExpectedResponse);
      });
    });
  });


}

