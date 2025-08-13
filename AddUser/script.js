const username = document.querySelector('#name')
const role = document.querySelector('#role')
const bio  = document.querySelector('#bio')
const avatar = document.querySelector('#avatar')
const form = document.querySelector('#form')
const userCards = document.querySelector('#userCards')


const userManager = {
    users: [],
    init : function () {
        form.addEventListener('submit', this.submitForm.bind(this))
    },
    submitForm : function (e){
        e.preventDefault()
        this.addUser()
    },
    addUser: function() {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            avatar: avatar.value
        });

        form.reset();
        this.renderUser()
    },

    renderUser : function(){
        userCards.innerHTML =""
        this.users.forEach((user)=>{
        // Create card container
      const card = document.createElement('div');
      card.className = 'bg-gray-800 p-4 rounded-lg shadow flex items-center gap-4';

      // Create image element
      const img = document.createElement('img');
      img.src = user.avatar;
      img.className = 'w-16 h-16 rounded-full object-cover border border-gray-600';

      // Create text container
      const textContainer = document.createElement('div');

      // Create name element
      const nameEl = document.createElement('h3');
      nameEl.className = 'text-lg font-bold';
      nameEl.textContent = user.username;

      // Create role element
      const roleEl = document.createElement('h4');
      roleEl.className = 'text-sm text-gray-400';
      roleEl.textContent = user.role;

      // Create bio element
      const bioEl = document.createElement('p');
      bioEl.className = 'text-gray-300 mt-1';
      bioEl.textContent = user.bio;

      // Append text elements
      textContainer.appendChild(nameEl);
      textContainer.appendChild(roleEl);
      textContainer.appendChild(bioEl);

      // Append image + text to card
      card.appendChild(img);
      card.appendChild(textContainer);

      // Add card to container
      userCards.appendChild(card);
     })}
   
}

userManager.init()


