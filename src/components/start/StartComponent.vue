 <template>
    <h1>Welcome to trivia madness</h1>
    
    <br>

    <label for="nameField">Please enter your name</label>
    <input class="form-control" v-model="name" id="nameField" type="text" placeholder="Name">

    <br>
    
    <label for="amountField">Please enter the amount of question</label>
    <input type="number" class="form-control" id="amountField" max=50  placeholder="A number" v-model="amount">

    <br>

    <div class="row">
      <div class = "col">
        <input type="radio" name= "difficulty" class="radio" value="easy" v-model="difficulty"  />
        <label>Easy</label>
      </div>
      <div class = "col">
        <input type="radio"  name= "difficulty" class="radio" value="medium" v-model="difficulty" />
        <label>Medium</label>
      </div>
      <div class = "col">
        <input type="radio"  name= "difficulty" class="radio" value="hard" v-model="difficulty" />
        <label>Hard</label>
      </div>
    </div>
    
    <br>

    <select class="form-select" aria-label="Default select example" v-model="category">
      <option selected>Category</option>
      <option value="25">Art</option>
      <option value="23">History</option>
      <option value="27">Animals</option>
      <option value="24">Politics</option>
      <option value="21">Sports</option>
      <option value="20">Mythology</option>
    </select>
    
    <br>

    <div class="row">
      <div class = "col">
        <input type="radio" name= "questionType" class="radio" value="multiple"  v-model="questionType"  />
        <label>Multiple choice</label>
      </div>
      <div class = "col">
        <input type="radio" name= "questionType" class="radio" value="boolean"  v-model="questionType" />
        <label>True or false</label>
      </div>
    </div>

    <br>
    <br>

    <button type="button" class="btn btn-primary"  @click="begin">Play game</button>
</template>

<script setup>
  import { ref, reactive } from "@vue/reactivity";
  import { attemptLogin } from "../../utils/api.js";
  import { updateScore } from "../../utils/api.js";
  import { getUrl } from "../../utils/triviaApi.js";
  
  import {useRouter} from 'vue-router'

  const name = ref("");
  const amount = ref("");
  const difficulty = ref("");
  const category = ref("");
  const questionType = ref("");
  const router = useRouter()

  function begin(){
    attemptLogin(name.value);
    getUrl(amount.value, category.value, questionType.value, difficulty.value)
    updateScore(1)
    //router.push('/questions')

    const storedName =localStorage.getItem("name");
    const storedquestions = JSON.parse(localStorage.getItem("questions"));
    const storedanswers = JSON.parse(localStorage.getItem("correctAnswer"));
    const storedanswersIncorrect = JSON.parse(localStorage.getItem("incorrectAnswer"));

    console.log(storedName);
    console.log(storedquestions[0]);
    console.log(storedanswers[0]);
    console.log(storedanswersIncorrect[0]);
  }

</script>

<style scoped>

</style>
