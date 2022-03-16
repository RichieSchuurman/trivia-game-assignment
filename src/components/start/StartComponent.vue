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
        <input type="radio" name= "difficulty" class="radio" value="Easy" v-model="difficulty"  />
        <label>Easy</label>
      </div>
      <div class = "col">
        <input type="radio"  name= "difficulty" class="radio" value="Medium" v-model="difficulty" />
        <label>Medium</label>
      </div>
      <div class = "col">
        <input type="radio"  name= "difficulty" class="radio" value="Hard" v-model="difficulty" />
        <label>Hard</label>
      </div>
    </div>
    
    <br>

    <select class="form-select" aria-label="Default select example" v-model="category">
      <option selected>Category</option>
      <option value="Art">Art</option>
      <option value="History">History</option>
      <option value="Animals">Animals</option>
      <option value="Politics">Politics</option>
      <option value="Sports">Sports</option>
      <option value="Mythology">Mythology</option>


    </select>
    
    <br>

    <div class="row">
      <div class = "col">
        <input type="radio" name= "questionType" class="radio" value="Multiple Choice"  v-model="questionType"  />
        <label>Multiple choice</label>
      </div>
      <div class = "col">
        <input type="radio" name= "questionType" class="radio" value="True / False"  v-model="questionType" />
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

  const name = ref("");
  const amount = ref("");
  const difficulty = ref("");
  const category = ref("");
  const questionType = ref("");




  function begin(){
    console.log(name.value);
    console.log(amount.value);
    console.log(difficulty.value);
    console.log(category.value);
    console.log(questionType.value);
  }
</script>

<style scoped>

</style>
