 <template>
    <header class="start-header">
      <h1>Welcome to trivia madness</h1>
    </header>
    
    <div class="container">
      <div class="row">
        <form class="select-trivia-options">
          <label class="label-styling" for="nameField">Enter your name</label>
          <input class="form-control input-styling" v-model="name" id="nameField" type="text" placeholder="Enter your name">
    
          <label class="label-styling" for="amountField">Enter the amount of question</label>
          <input type="number" class="form-control input-styling" id="amountField" max=50  placeholder="Enter the amount" v-model="amount">

          <div class="row">
            <label class="label-styling">Select your difficulty</label>
            <div class = "col">
              <input type="radio" name= "difficulty" class="radio input-styling-radio" value="easy" v-model="difficulty"  />
              <label>Easy</label>
            </div>
            <div class = "col">
              <input type="radio"  name= "difficulty" class="radio input-styling-radio" value="medium" v-model="difficulty" />
              <label>Medium</label>
            </div>
            <div class = "col">
              <input type="radio"  name= "difficulty" class="radio input-styling-radio" value="hard" v-model="difficulty" />
              <label>Hard</label>
            </div>
          </div>

          <label class="label-styling">Select your category</label>
          <select class="form-select input-styling" placeholder="Select your category" aria-label="Default select example" v-model="category">
            <option value="" disabled selected>Select your category</option>
            <option value="9">General knowledge</option>
            <option value="11">Film</option>
            <option value="15">Video games</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="26">Celebrities</option>
          </select>

          <div class="row">
            <label class="label-styling">Select your question type</label>
            <div class = "col">
              <input type="radio" name= "questionType" class="radio input-styling-radio" value="multiple"  v-model="questionType"  />
              <label>Multiple choice</label>
            </div>
            <div class = "col">
              <input type="radio" name= "questionType" class="radio input-styling-radio" value="boolean"  v-model="questionType" />
              <label>True or false</label>
            </div>
          </div>

           <div class="d-grid col-6 mx-auto start-button">
             <button type="button" class="btn btn-primary"  @click="begin">Play game</button>
           </div>
        </form>
      </div>
    </div>
    
</template>

<script setup>
  import { ref, reactive } from "@vue/reactivity";
  import { attemptLogin } from "../../utils/api.js";
  import { updateScore } from "../../utils/api.js";
  import { getUrl } from "../../utils/triviaApi.js";
  
  import {useRouter} from 'vue-router'

  localStorage.clear();

  const name = ref("");
  const amount = ref("");
  const difficulty = ref("");
  const category = ref("");
  const questionType = ref("");
  const router = useRouter()

  function begin(){
    
    localStorage.setItem("questionNumber", "0");
    localStorage.setItem("score", "0")

    getUrl(amount.value, category.value, questionType.value, difficulty.value)
    attemptLogin(name.value);

    const storedName = localStorage.getItem("name");
    const storedquestions = JSON.parse(localStorage.getItem("questions"));
    const storedanswers = JSON.parse(localStorage.getItem("correctAnswer"));
    const storedanswersIncorrect = JSON.parse(localStorage.getItem("incorrectAnswer"));

    console.log(storedName);
    console.log(storedquestions);
    console.log(storedanswers);
    console.log(storedanswersIncorrect);

    router.push('/questions')

  }

</script>

<style lang="scss" scoped>
  @import "../../utils/main.scss";
</style>
