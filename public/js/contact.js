setTimeout(() => {
  IMLICTA.renderForm(
    {
      host: "https://prod.imkloud.com/",
      formId: "EvDyrhXyyKHnFBhav",
      token: "optional",
    },
    function (response) {
      $(".success-message-becomeprovider").css("display", "block");
      $(".success-message-becomeprovider").html(response.message);
      $("#referForm").find("input, textarea,select,input").val("");
       window.location.href = "/thank-you";
    }
  );
}, 1000);





