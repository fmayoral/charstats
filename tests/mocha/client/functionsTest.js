if (typeof MochaWeb !== 'undefined'){
  MochaWeb.testOnly(function(){
    var pj_fighter = {
      'info': {
        'initiative': 1,
        'experience': {
          'current': 24000,
          'type': 'slow'
        },
        'class': 'fighter',
        'race': 'human',
        'atributos': {
          'str': 14,
          'dex': 16,
          'con': 12,
          'int': 14,
          'wis': 12,
          'cha': 10
        },
        'health': {
          'total': 100,
          'damage': 0
        },
        'distance_target': 10,
      },
      'modificadores': {
        'str': 2,
        'dex': 3,
        'con': 1,
        'int': 2,
        'wis': 1,
        'cha': 0,
      },
      'skills': {
        'test_rank_0': 0,
        'test_rank_1': 2,
        'test_rank_2': 1
      }
    };
    describe("Function - Get Initiative", function(){
      it("should calculate the initiative", function(){
        initiative = Rolepack.funciones.getInitiative(pj_fighter, 2);
        chai.expect(initiative).to.equal(6);
      });
    });

    describe("Function - Used Ranks", function(){
      it("should give the ammount of used ranks for a player", function(){
        usedRanks = Rolepack.funciones.usedRanks(pj_fighter);
        chai.expect(usedRanks).to.equal(3);
      });
    });

    describe("Function - Get PJ Level", function(){
      it("should return the PJ level for slow experience", function(){
        level = Rolepack.funciones.getPjLevel(pj_fighter);
        chai.expect(level).to.equal(5);
      });
      it("should return the PJ level for medium experience", function(){
        pj_fighter.info.experience.type = 'medium';
        level = Rolepack.funciones.getPjLevel(pj_fighter);
        chai.expect(level).to.equal(6);
      });
      it("should return the PJ level for fast experience", function(){
        pj_fighter.info.experience.type = 'fast';
        level = Rolepack.funciones.getPjLevel(pj_fighter);
        chai.expect(level).to.equal(7);
      });
    });

    describe("Function - Get Max Ranks", function(){
      it("shloud give the max ranks of a player", function(){
        pj_fighter.info.experience.type = 'slow'; //to be sure that the pj is lvl 5
        maxRanks = Rolepack.funciones.maxRanks(pj_fighter);
        chai.expect(maxRanks).to.equal(25);
      });
    });

    describe("Function - Change Round Type", function (){
      it("Should change the round type to the given one", function(){
        originalRT = pj_fighter.info.round_type;
        mPj = Rolepack.funciones.modRoundType(pj_fighter, 'test');
        chai.expect(mPj.info.round_type).to.equal('test');
        mPj = Rolepack.funciones.modRoundType(pj_fighter, originalRT);
      });
    });

    describe("Function - Change XP", function (){
      it("Should add experience to the player", function(){
        originalXp = pj_fighter.info.experience.current;
        mPj = Rolepack.funciones.modExperience(pj_fighter, 1500);
        chai.expect(mPj.info.experience.current).to.equal(1500+originalXp);
      });
      it("Should remove experience from the player", function(){
        originalXp = pj_fighter.info.experience.current;
        mPj = Rolepack.funciones.modExperience(pj_fighter, -1500);
        chai.expect(mPj.info.experience.current).to.equal(originalXp-1500);
      });
    });

    describe("Function - Change HP", function (){
      it("Should add damage to the player", function(){
        damage = pj_fighter.info.health.damage;
        mPj = Rolepack.funciones.modHealth(pj_fighter, 50);
        chai.expect(mPj.info.health.damage).to.equal(50+damage);
      });
      it("Should remove damage from the player", function(){
        damage = pj_fighter.info.health.damage;
        mPj = Rolepack.funciones.modHealth(pj_fighter, -50);
        chai.expect(mPj.info.health.damage).to.equal(damage-50);
      });
      it("Shouldn't remove more damage than 0", function(){
        pj_fighter.info.health.damage = 0;
        mPj = Rolepack.funciones.modHealth(pj_fighter, -50);
        chai.expect(mPj.info.health.damage).to.equal(0);
      });
    });

    describe("Function - Change Distance to Target", function (){
      it("Should change the distance to target", function(){
        mPj = Rolepack.funciones.setDistanceToTarget(pj_fighter, 20);
        chai.expect(mPj.info.distance_target).to.equal(20);
        mPj = Rolepack.funciones.setDistanceToTarget(pj_fighter, 30);
        chai.expect(mPj.info.distance_target).to.equal(30);
      });
    });

  });


}
