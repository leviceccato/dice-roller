<template>

  <div class="Roller">

    <h1 class="VisuallyHidden">
      Dice Roller
    </h1>

    <h2 class="VisuallyHidden">
      Formula
    </h2>

    <form class="Roller-form">

      <label
        class="Roller-label"
        for="formula">
        Enter notation (E.g. 2d6+5)
      </label>

      <div class="Roller-row">

        <div class="Roller-inputWrapper">
          <input
            class="Roller-input"
            type="text"
            id="formula"
            name="formula"
            placeholder="2d6+5"
            v-model="formula">
          <button
            class="Roller-inputClear"
            @click="clearFormula">
            <span class="VisuallyHidden">
              Clear formula
            </span>
            <span class="Roller-inputCross"></span>
          </button>
        </div>

        <button
          class="Roller-button"
          @click.prevent="roll">
          <span class="Roller-buttonInner">
            <span class="Roller-buttonText">
              Roll
            </span>
          </span>
        </button>

      </div>
      
      <p
        class="Roller-error"
        v-if="error.length">
        {{ error }}
      </p>

    </form>

    <div class="Roller-results Results">

      <header class="Results-header">

        <h2 class="Roller-label">
          Results
        </h2>

        <button
          class="Results-clear"
          @click="clearResults">
          Clear <span class="VisuallyHidden">results</span>
        </button>

      </header>

      <ol
        class="Results-list"
        v-if="results.length">

        <li
          class="Results-item"
          v-for="(result, i) in results"
          :key="i">

          <div class="Results-button">

            <span class="Results-roll">
              {{ result.roll }}
            </span>

            <span class="Results-formula">
              {{ result.formula }}
            </span>

            <span class="Results-timestamp">
              {{ result.timestamp }}
            </span>

          </div>

        </li>
        
      </ol>

      <div
        class="Results-empty"
        v-else>
        No rolls yet
      </div>

    </div>

  </div>

</template>

<script>
export default {
  
  data() {
    return {

      results: [],
      formula: 'd20',
      error: '',
    }
  },

  methods: {

    roll() {

      this.error = ''

      const spacelessFormula = this.formula.replace(/\s/g, '')

      const validCharacters = [
        '-',
        '+',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'd',
      ]

      const regex = new RegExp('[^' + validCharacters + ']', 'g')

      if (regex.test(spacelessFormula)) {
        this.error = 'Only numbers, spaces, \'+\', \'-\' and \'d\' are allowed.';
        return
      }

      let tokenArray = []
      let currentToken = ''

      for (let i = 0; i < spacelessFormula.length; i++) {
        
        const char = spacelessFormula[i]

        if (char !== '+' && char !== '-') {
          if ((currentToken.indexOf('d') >= 0) && (char === 'd')) {
            continue
          } else {
            currentToken = currentToken.concat(char)
          }
        } else {
          if (currentToken.length) {
            tokenArray.push(currentToken)
          }
          tokenArray.push(char)
          currentToken = ''
        }
      }

      if (currentToken !== '') {
        tokenArray.push(currentToken)
      }

      let result = 0
      let previousOperator = null

      for (let i = 0; i < tokenArray.length; i++) {

        const token = tokenArray[i]

        let tokenResult

        if (token === '+' || token === '-') {

          previousOperator = token

          continue

        } else if (token.indexOf('d') >= 0) {

          let [diceCount, diceType] = token.split('d')
          diceCount = diceCount !== '' ? parseInt(diceCount) : 1
          diceType = diceType !== '' ? parseInt(diceType) : 20

          tokenResult = diceCount * (Math.floor(Math.random() * diceType) + 1)

        } else {

          tokenResult = parseInt(token)

        }
        
        if (previousOperator === '-') {
          result -= tokenResult
        } else {
          result += tokenResult
        }

        previousOperator = null
      }

      //console.log(tokenArray, result)

      this.results.push({
        roll: result,
        formula: tokenArray.join(''),
        timestamp: (new Date()).toLocaleString()
      })

      this.$bus.$emit('dice-rolled')
    },

    clearResults() {
      this.results = []
    },

    clearFormula() {
      this.formula = ''
    }
  }
}
</script>