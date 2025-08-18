setTimeout(() => {
    IMLICTA.renderForm(
      {
        host: "https://prod.imkloud.com/",
        formId: "MZNCXmcR5aCFAuq4M",
        token: "optional",
      },
      function (response) {
        $(".contact-message").css("display", "block");
        $(".contact-message").html(response.message);
        $("#contactform").find("input, textarea,select,input").val("");
      }
    );
  }, 500);