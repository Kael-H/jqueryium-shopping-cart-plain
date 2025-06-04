function addTotals(ele) {
  var itemPrice = $(ele).children(".cost").text();
  var itemQty = $(ele).children(".amount").text();

  var itemTotal = itemPrice * itemQty;

  $(ele).children(".subTotal").html(itemTotal);
  return itemTotal;
}

$("document").ready(function () {
  var totalAmount = 0;

  $("tbody, tr").each(function () {
    let subttl = addTotals(this);
    totalAmount += subttl;
  });

  function resetTotals() {
    $(".total").html(totalAmount);
  }
  resetTotals();
  $("form > button").on("click", function () {
    var addItem = $(".item").val();
    var addPrice = $(".price").val();
    var addAmount = $(".quant").val();

    $("tbody").append(
      "<tr>" +
        '<th scope="row">' +
        addItem +
        "</th>" +
        '<td class="cost">' +
        addPrice +
        "</td>" +
        '<td class="amount">' +
        addAmount +
        "</td>" +
        '<td class="subTotal">0</td>' +
        '<td><button type="button" class="btn">Remove</button></td>' +
        "</tr>"
    );

    $(".item").val("");
    $(".price").val("");
    $(".quant").val("");
  });

  $("button").on("click", function () {
    totalAmount = 0;
    $("tbody, tr").each(function () {
      let subttl = addTotals(this);
      totalAmount += subttl;
      resetTotals();
    });
  });

  $(".rmv").on("click", function () {
    $(this).closest("tr").remove();
  });
});
