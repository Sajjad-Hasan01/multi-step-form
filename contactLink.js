/* Add nad Remove Contact Links */
const addLinkBtn = document.querySelector('#addLinkBtn')

addLinkBtn.addEventListener('click', e => addContactLink(e))

function addContactLink(e){
    e.preventDefault()
    linkField=`
    <div class="select-field contact-link">
        <select>
            <option value="0" selected disabled>select</option>
            <option value="Website" data-link="https://" data-user="domain.com" data-type="text">Website <i class="ri-global-line"></i></option>
            <option value="Facebook" data-link="facebook.com/" data-user="username" data-type="text">Facebook <i class="ri-facebook-box-fill"></i></option>
            <option value="Instagram" data-link="instagram.com/" data-user="username" data-type="text">Instagram <i class="ri-instagram-line"></i></option>
            <option value="Twitter" data-link="twitter.com/" data-user="username" data-type="text">Twitter <i class="ri-twitter-fill"></i></option>
            <option value="Telegram" data-link="t.me/" data-user="username" data-type="text">Telegram <i class="ri-telegram-fill"></i></option>
            <option value="Whatsapp" data-link="wa.me/" data-user="964 0770 111 0000" data-type="tel">Whatsapp <i class="ri-whatsapp-line"></i></option>
        </select>
        <label class="data-link"></label>
        <button class="remove-link-btn"><i class="ri-close-circle-fill"></i></button>
    </div>
    `;

    e.target.insertAdjacentHTML("beforebegin",linkField)
    linkOptions();
}

function linkOptions() {
    const selectLinkType = document.querySelectorAll('.contact-link > select'),
        removeLinkBtn = document.querySelectorAll('.contact-link > .remove-link-btn');

    selectLinkType.forEach(list => {
        list.addEventListener('change', e => onSelectionChange(e))
    });

    removeLinkBtn.forEach(btn => {
        btn.addEventListener('click', e => removeContactLink(e, btn))
    });
}

function onSelectionChange(e) {
    e.preventDefault()
    const hintLabel = e.target.parentElement.querySelector('label'),
        option = e.target.selectedOptions[0],
        link = option.dataset.link,
        type = option.dataset.type,
        user = option.dataset.user;
    hintLabel.innerHTML = `${link} <input type="${type}" placeholder="${user}" spellcheck="false"/>`;
}

function removeContactLink(e, btn){
    e.preventDefault()
    btn.parentElement.remove()
}
