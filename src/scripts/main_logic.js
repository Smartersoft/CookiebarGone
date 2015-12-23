// The default timeout
var cookie_timeout = 150;
// the number of tries
var cookie_attempt = 1;

// Try to click a button by a certain querySelector
function cookie_gone_try_query(q){
  console.log(q);
  var htmlNode = document.querySelector(q);
  if(htmlNode)
  {
    htmlNode.click();
    return true;
  }
}

// Try to click a button by a certain id
function cookie_gone_try_id(id){
  console.log(id);
  var htmlnode = document.getElementById(id);
  if(htmlnode){
    console.log('Found ID: '+id);
    htmlnode.click();
    return true;
  }
}

//Try to click a button by classname
function cookie_gone_try_class(cls){
  console.log(cls);
  var htmlnode = document.getElementsByClassName(cls);
  if(htmlnode.length){
    console.log('Found Class: '+cls);
    htmlnode[0].click();
    return true;
  }
}


// This is the main function of the extension.
// It is called on a timeout because some sites delay to cookiemelding.
function remove_all_cookie_bars(){

  //Check all IDS and click them.
  console.log('Trying cookie ids');
  for(index in cookie_btn_ids){
    if(cookie_gone_try_id(cookie_btn_ids[index]))
      return true;
  }

  //Check all the classes and click them.
  console.log('Trying cookie classes');
  for(index in cookie_btn_classes){
    if(cookie_gone_try_class(cookie_btn_classes[index]))
      return true;
  }

  //Check all the queries (most expensive)
  console.log('Trying cookie queries');
  //log(cookie_btn_queries);
  for(index in cookie_btn_queries){
    if(cookie_gone_try_query(cookie_btn_queries[index]))
      return true;
  }

  // Retry 4 times, make the delay longer on every call.
  if(cookie_attempt < 5){
    setTimeout(remove_all_cookie_bars,cookie_timeout*cookie_attempt);
  }
  cookie_attempt++;
  return false;
}

// Execute the main funtion after 50ms
setTimeout(remove_all_cookie_bars,50);
