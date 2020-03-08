var newPolitician = function(name, partyColor) {
  var politician = {
    name: name,
    partyColor: partyColor,
    electionResults: null,
    totalVotes: function(){
      var voteCount = 0;
      for (var i = 0; i < this.electionResults.length; i++) {
        voteCount = voteCount + this.electionResults[i];
      }
      return voteCount;
    }
  };  
  
  return politician;
};

var getWinner = function(candidate1, candidate2) {
  var winner;
  var candidate1Total = candidate1.totalVotes();
  var candidate2Total = candidate2.totalVotes();
  if (candidate1Total > candidate2Total) {
    winner = candidate1;
  } else if (candidate2Total > candidate1Total) {
    winner = candidate2;
  } else {
    winner = null;
  }

  return winner;
};

var setStateResults = function(state) {
  var stateWinner = null;
  if (candidate1.electionResults[state] > candidate2.electionResults[state]) {
    theStates[state].winner = candidate1;
  } else if (candidate2.electionResults[state] > candidate1.electionResults[state]) {
    theStates[state].winner = candidate2;
  }
  stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  stateInfoName.innerText = theStates[state].nameFull;
  stateInfoAbbrev.innerText = theStates[state].nameAbbrev;
  stateInfoCandidate1Name.innerText = candidate1.name;
  stateInfoCandidate1Results.innerText = candidate1.electionResults[state];
  stateInfoCandidate2Name.innerText = candidate2.name;
  stateInfoCandidate2Results.innerText = candidate2.electionResults[state];
  if (stateWinner === null) {
    stateInfoWinner.innerText = "TIE";
  } else {
    stateInfoWinner.innerText = stateWinner.name;
  }

};

var stateInfoTable = document.getElementById("stateResults");
var stateInfoTableHeader = stateInfoTable.children[0].children[0];
var stateInfoName = stateInfoTableHeader.children[0];
var stateInfoAbbrev = stateInfoTableHeader.children[1];
var stateInfoCandidate1Name = stateInfoTable.children[1].children[0].children[0];
var stateInfoCandidate1Results = stateInfoTable.children[1].children[0].children[1];
var stateInfoCandidate2Name = stateInfoTable.children[1].children[1].children[0];
var stateInfoCandidate2Results = stateInfoTable.children[1].children[1].children[1];
var stateInfoWinner = stateInfoTable.children[1].children[2].children[1];

var candidate1 = newPolitician("Bianca Bates", [132, 17, 11]);
var candidate2 = newPolitician("Harry Howe", [245, 141, 136]);
var winner;

candidate1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
candidate2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

candidate1.electionResults[9] = 1;
candidate2.electionResults[9] = 28;
candidate1.electionResults[4] = 17;
candidate2.electionResults[4] = 38;
candidate1.electionResults[43] = 11;
candidate2.electionResults[43] = 27;

winner = getWinner(candidate1, candidate2);
if (winner === null) {
  console.log("It's a tie! Time for a recount!");
} else {
  console.log(winner.name + " is the winner!");  
}

var candidateInfoTable = document.getElementById("countryResults");

candidateInfoTable.children[0].children[0].children[0].innerText = candidate1.name;
candidateInfoTable.children[0].children[0].children[1].innerText = candidate1.totalVotes();
candidateInfoTable.children[0].children[0].children[2].innerText = candidate2.name;
candidateInfoTable.children[0].children[0].children[3].innerText = candidate2.totalVotes();
candidateInfoTable.children[0].children[0].children[5].innerText = winner.name;