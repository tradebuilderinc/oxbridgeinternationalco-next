setTimeout(() => {
  IMLICTA.renderForm(
    {
      host: "https://prod.imkloud.com/",
      formId: "9s4CRGtTMug7tXehQ",
      token: "optional",
    },
    function (response) {
      $(".success-message-becomeprovider").css("display", "block");
      $(".success-message-becomeprovider").html(response.message);
      $("#mainform").find("input, textarea,select,input").val("");
       window.location.href = "/thank-you";
    }
  );
}, 1000);





