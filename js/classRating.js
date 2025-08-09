export class Rating {
   #ratingValue = 0;

   init() {
      this.initRating();
      this.initSubmit();
   }

   initRating() {
      const ratingOptions = document.querySelectorAll('input[type="radio"]');
      
      for(const e of ratingOptions) {
         e.addEventListener('change', (e) => {
            this.#ratingValue = Number(e.currentTarget.value) || 0;
            this.updateSuccess();
         }) 
      }
   }

   updateSuccess() {
      const successText = document.querySelector('.success__header-text');

      successText.textContent = `You selected ${this.#ratingValue} out of 5`;
   }

   initSubmit() {
      const submitButton = document.querySelector('.rating__submit');
      const ratingCard = document.querySelector('.rating');
      const successCard = document.querySelector('.success');

      submitButton.addEventListener('click', (e) => {
         e.preventDefault();

         if(this.#ratingValue) {
            ratingCard.classList.replace('active', 'hidden');
            successCard.classList.replace('hidden', 'active');
         } else {
            alert('Please select a rating first before submitting.');
         }
      })
   }
}

