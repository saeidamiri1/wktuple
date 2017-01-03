//because read.csv is in utils
var convertfile;
var matdislk;
var matdisdfr;
var matdiscvtree;
var label0 = new ocpu.Snippet($("#label1").val());
var nfield = parseInt($("#nfield").val());
//actual handler
$("#submitfile").on("click", function() {

  //arguments
  var myheader = $("#header").val() == "true";
  var myfile = $("#csvfile")[0].files[0];

  if (!myfile) {
    alert("No file selected.");
    return;
  }


  //disable the button during upload
  $("#submitfile").attr("disabled", "disabled");

  //perform the request
  ocpu.seturl("//public.opencpu.org/ocpu/library/seqinr/R")
  var req = ocpu.call("read.fasta", {
    "file": myfile,
  }, function(argf) {
    convertfile = argf;
    convertfile.getConsole(function(outtxt) {
      $("#outputsubmitfile").text(outtxt);
    });
  });

  //if R returns an error, alert the error message
  req.fail(function() {
    alert("Server error: " + req.responseText);
  });

  //after request complete, re-enable the button 
  req.always(function() {
    $("#submitfile").removeAttr("disabled")
  });
});

$("#buttondislk").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var nfield = parseInt($("#nfield").val());
  var req1 = ocpu.call("DKLlk", {
    ee: convertfile,
    ell: nfield
  }, function(arglk) {
    matdislk = arglk;
    matdislk.getConsole(function(outtxt) {
      $("#outputdislk").text(outtxt);
    });
  });
});

$("#buttondendislk").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matdislk
  }, function(arglkdn) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
    var label0 = new ocpu.Snippet($("#label1").val());

    var req = $("#plotdislk").rplot("plotden", {
      hc1: arglkdn,
      cluslab: label0
    })
  });
});


$("#buttondencirdislk").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matdislk
  }, function(arglkcr) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/ape/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")

    var req = $("#plotdislk").rplot("plotdencir", {
      hc1: arglkcr,
      cluslab: label0
    })
  });
});

/* */
/* */
$("#buttonendislk").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var nfield = parseInt($("#nfield").val());
  var req1 = ocpu.call("EnDKLlk", {
    ee: convertfile
  }, function(arglk) {
    matendislk = arglk;
    matendislk.getConsole(function(outtxt) {
      $("#outputendislk").text(outtxt);
    });
  });
});

$("#buttonendendislk").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matendislk
  }, function(arglkdn) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
    var label0 = new ocpu.Snippet($("#label1").val());

    var req = $("#plotendislk").rplot("plotden", {
      hc1: arglkdn,
      cluslab: label0
    })
  });
});


$("#buttonendencirdislk").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matendislk
  }, function(arglkcr) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/ape/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")

    var req = $("#plotendislk").rplot("plotdencir", {
      hc1: arglkcr,
      cluslab: label0
    })
  });
});


/**************************/
/**************************/
/**************************/
/**************************/
/**************************/
/**************************/


$("#buttondisdfr").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var nfield = parseInt($("#nfield").val());
  var req1 = ocpu.call("DKLdfr", {
    ee: convertfile,
    ell: nfield
  }, function(argdfr) {
    matdisdfr = argdfr;
    matdisdfr.getConsole(function(outtxt) {
      $("#outputdisdfr").text(outtxt);
    });
  });
});

$("#buttondendisdfr").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matdisdfr
  }, function(argdfrdn) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
    var label0 = new ocpu.Snippet($("#label1").val());
    var req = $("#plotdisdfr").rplot("plotden", {
      hc1: argdfrdn,
      cluslab: label0
    })
  });
});

$("#buttondencirdisdfr").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matdisdfr
  }, function(argdfrcr) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/ape/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")

    var req = $("#plotdisdfr").rplot("plotdencir", {
      hc1: argdfrcr,
      cluslab: label0
    })
  });
});

/**/
/**/
/**/

$("#buttonendisdfr").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var nfield = parseInt($("#nfield").val());
  var req1 = ocpu.call("EnDKLdfr", {
    ee: convertfile
  }, function(argdfr) {
    matendisdfr = argdfr;
    matendisdfr.getConsole(function(outtxt) {
      $("#outputendisdfr").text(outtxt);
    });
  });
});

$("#buttonendendisdfr").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matendisdfr
  }, function(argdfrdn) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
    var label0 = new ocpu.Snippet($("#label1").val());
    var req = $("#plotendisdfr").rplot("plotden", {
      hc1: argdfrdn,
      cluslab: label0
    })
  });
});

$("#buttonendencirdisdfr").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matendisdfr
  }, function(argdfrcr) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/ape/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")

    var req = $("#plotendisdfr").rplot("plotdencir", {
      hc1: argdfrcr,
      cluslab: label0
    })
  });
});



/**************************/
/**************************/
/**************************/
/**************************/
/**************************/
/**************************/
$("#buttondiscvtree").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var nfield = parseInt($("#nfield").val());
  var req1 = ocpu.call("DKLcvtree", {
    ee: convertfile,
    ell: nfield
  }, function(argcv) {
    matdiscvtree = argcv;
    matdiscvtree.getConsole(function(outtxt) {
      $("#outputdiscvtree").text(outtxt);
    });
  });
});

$("#buttondendiscvtree").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matdiscvtree
  }, function(argcvdn) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
    var label0 = new ocpu.Snippet($("#label1").val());
    var req = $("#plotdiscvtree").rplot("plotden", {
      hc1: argcvdn,
      cluslab: label0
    })
  });
});

$("#buttondencirdiscvtree").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matdiscvtree
  }, function(argcvcr) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/ape/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
    var req = $("#plotdiscvtree").rplot("plotdencir", {
      hc1: argcvcr,
      cluslab: label0
    })
  });
});

/* */
/* */

$("#buttonendiscvtree").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var nfield = parseInt($("#nfield").val());
  var req1 = ocpu.call("EnDKLcvtree", {
    ee: convertfile
  }, function(argcv) {
    matendiscvtree = argcv;
    matendiscvtree.getConsole(function(outtxt) {
      $("#outputendiscvtree").text(outtxt);
    });
  });
});

$("#buttonendendiscvtree").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matendiscvtree
  }, function(argcvdn) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
    var label0 = new ocpu.Snippet($("#label1").val());
    var req = $("#plotendiscvtree").rplot("plotden", {
      hc1: argcvdn,
      cluslab: label0
    })
  });
});

$("#buttonendencirdiscvtree").click(function() {
  ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
  var req1 = ocpu.call("hc0", {
    Se: matendiscvtree
  }, function(argcvcr) {
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/graphics/R")
    ocpu.seturl("//pubic.opencpu.org/ocpu/library/ape/R")
    ocpu.seturl("https://public.opencpu.org/ocpu/github/saeidamiri1/justtest16/R")
    var req = $("#plotendiscvtree").rplot("plotdencir", {
      hc1: argcvcr,
      cluslab: label0
    })
  });
});
