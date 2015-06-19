if (typeof MochaWeb !== 'undefined'){
  MochaWeb.testOnly(function(){
    describe("Efecto - Extra Attack", function(){
      it("should give (n) extra attack", function(){
        attackRequest = [2,3];
        attackResponse = Rolepack.efectos.ataque_extra({'ataques':attackRequest}, 2);
        chai.assert.equal(attackResponse.ataques.length, 4);

        attackRequest = [2];
        attackResponse = Rolepack.efectos.ataque_extra({'ataques':attackRequest}, 1);
        chai.assert.equal(attackResponse.ataques.length, 2);

        attackRequest = [2,3];
        attackResponse = Rolepack.efectos.ataque_extra({'ataques':attackRequest}, 5);
        chai.assert.equal(attackResponse.ataques.length, 7);
      });
    });

    describe("Efecto - Modifica Bonus de Ataque", function(){
      it("should give bonus to all attacks", function(){
        attackRequest = [2, 3];
        attackResponse = Rolepack.efectos.ataque({'ataques':attackRequest}, 2);
        chai.assert.deepEqual(attackResponse.ataques, [4, 5]);
      });

      it("should give bonus to a single", function(){
        attackRequest = [2];
        attackResponse = Rolepack.efectos.ataque({'ataques':attackRequest}, 1);
        chai.assert.deepEqual(attackResponse.ataques, [3]);
      });

      it("should give negative bonus to all attacks", function(){
        attackRequest = [2, 3];
        attackResponse = Rolepack.efectos.ataque({'ataques':attackRequest}, -1);
        chai.assert.deepEqual(attackResponse.ataques, [1, 2]);
      });
    });

    describe("Efecto - Modifica Bonificador de Daño", function(){
      it("should give bonus to many weapons", function(){
        weaponRequest =[{'otro_atributo': false,'bonificador': 2 },{'otro_atributo': false,'bonificador': 0 }];
        weaponExpectedResponse =[{'otro_atributo': false,'bonificador': 4 },{'otro_atributo': false,'bonificador': 2 }];
        weaponResponse = Rolepack.efectos.danio_bonificador({'weapons':weaponRequest}, 2);
        chai.assert.deepEqual(weaponResponse.weapons, weaponExpectedResponse);
      });

      it("should give bonus to one weapon", function(){
        weaponRequest =[{'otro_atributo': false,'bonificador': 1 }];
        weaponExpectedResponse =[{'otro_atributo': false,'bonificador': 2 }];
        weaponResponse = Rolepack.efectos.danio_bonificador({'weapons':weaponRequest}, 1);
        chai.assert.deepEqual(weaponResponse.weapons, weaponExpectedResponse);
      });

      it("should give negative bonus to weapons", function(){
        weaponRequest =[{'otro_atributo': false,'bonificador': 0 },{'otro_atributo': false,'bonificador': 2 }];
        weaponExpectedResponse =[{'otro_atributo': false,'bonificador': -1 },{'otro_atributo': false,'bonificador': 1 }];
        weaponResponse = Rolepack.efectos.danio_bonificador({'weapons':weaponRequest}, -1);
        chai.assert.deepEqual(weaponResponse.weapons, weaponExpectedResponse);
      });
    });
  });


}
