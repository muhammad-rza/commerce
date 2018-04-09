/* eslint-disable */
export default {


    methods:{


        dataTable(elmentId) {
            // var self = this;
            this.$nextTick(function() {
                $(`${elmentId}`).DataTable({

                  })
            })


        },


        resizeAble(element) {


          $(element).resizable({
            resizeHeight: false,
            // we use the column as handle and filter
            // by the contained .resizer element
            handleSelector: "",
            minWidth: 1,
            handles: 'e, w',
            onDragStart: function(e, $el, opt) {
              // only drag resizer
              // if (!$(e.target).hasClass("resizer"))
              //   return false;
              return true;
            }
          });


        }

    }

}
