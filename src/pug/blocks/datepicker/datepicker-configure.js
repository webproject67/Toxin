$(".form__block-inputs").each(function () {
  const input1 = $(this).find("#input1");
  const input2 = $(this).find("#input2");

  $(this).find(".datepicker-toggle").datepicker({
    clearButton: true,
    multipleDatesSeparator: ' - ',
    range: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: {
      days: 'MM <i>yyyy</i>'
  },
    onSelect: (date) => {
      const dates = date.split(" - ");
      input1.val(dates[0]);
      input2.val(dates[1]);
    }
  });

  const datepicker = $(this).find(".datepicker-toggle").data("datepicker");
  const button = $(`<span class='datepicker--btn'>Применить</span>`);
  datepicker.$datepicker.find(".datepicker--buttons").append(button);
  
  input1.click(() => datepicker.show());
  input2.click(() => datepicker.show());

  $(".datepicker--btn").click(() => {
      if (datepicker.selectedDates.length < 2) return;
      datepicker.hide();
    });
})