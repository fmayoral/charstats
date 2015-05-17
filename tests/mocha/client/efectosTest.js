if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Efecto - Extra Attack", function(){
      it("should give (n) extra attack", function(){
        var attackRequest = [2,3];
        var attackResponse = CharStats.efectos.ataque_extra({'ataques':attackRequest}, 2);
        chai.assert.equal(attackResponse.ataques.length, 4);

        var attackRequest = [2];
        var attackResponse = CharStats.efectos.ataque_extra({'ataques':attackRequest}, 1);
        chai.assert.equal(attackResponse.ataques.length, 2);

        var attackRequest = [2,3];
        var attackResponse = CharStats.efectos.ataque_extra({'ataques':attackRequest}, 5);
        chai.assert.equal(attackResponse.ataques.length, 7);
      });
    });
  });

  MochaWeb.testOnly(function(){
    describe("Efecto - Modifica Bonus de Ataque", function(){
      it("should give (n) bonus to all attacks", function(){
        var attackRequest = [2, 3];
        var attackResponse = CharStats.efectos.ataque({'ataques':attackRequest}, 2);
        chai.assert.deepEqual(attackResponse.ataques, [4, 5]);

        var attackRequest = [2];
        var attackResponse = CharStats.efectos.ataque({'ataques':attackRequest}, 1);
        chai.assert.deepEqual(attackResponse.ataques, [3]);

        var attackRequest = [2, 3];
        var attackResponse = CharStats.efectos.ataque({'ataques':attackRequest}, -1);
        chai.assert.deepEqual(attackResponse.ataques, [1, 2]);
      });
    });
  });

  MochaWeb.testOnly(function(){
    describe("Efecto - Modifica Bonificador de Daño", function(){
      it("should give (n) bonus to all damages", function(){
        var weaponRequest =[{'otro_atributo': false,'bonificador': 2 },{'otro_atributo': false,'bonificador': 0 }];
        var weaponExpectedResponse =[{'otro_atributo': false,'bonificador': 4 },{'otro_atributo': false,'bonificador': 2 }];
        var weaponResponse = CharStats.efectos.danio_bonificador({'weapons':weaponRequest}, 2);
        chai.assert.deepEqual(weaponResponse.weapons, weaponExpectedResponse);


        var weaponRequest =[{'otro_atributo': false,'bonificador': 1 }];
        var weaponExpectedResponse =[{'otro_atributo': false,'bonificador': 2 }];
        var weaponResponse = CharStats.efectos.danio_bonificador({'weapons':weaponRequest}, 1);
        chai.assert.deepEqual(weaponResponse.weapons, weaponExpectedResponse);

        var weaponRequest =[{'otro_atributo': false,'bonificador': 0 },{'otro_atributo': false,'bonificador': 2 }];
        var weaponExpectedResponse =[{'otro_atributo': false,'bonificador': -1 },{'otro_atributo': false,'bonificador': 1 }];
        var weaponResponse = CharStats.efectos.danio_bonificador({'weapons':weaponRequest}, -1);
        chai.assert.deepEqual(weaponResponse.weapons, weaponExpectedResponse);
      });
    });
  });


}
