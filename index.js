function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')

}

function increaseRankBy(n) {
  var rn = parseInt(n, 10) ;
  var items = document.querySelectorAll(' .ranked-list li') ;
  items.forEach(item => {
    item.textContent = parseInt(item.textContent, 10) + rn
  })
}

function deepestChild() {

}
