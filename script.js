let info=[];
function onFormSubmit() {
    let data = {
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        location:document.getElementById('location').value,
      }
      info.push(data);
      console.log('added', {info});
   
}