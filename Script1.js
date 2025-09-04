state = prompt("Enter your state")
district = prompt("Enter your state")
output = document.getElementById("output")
fetch(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000013b453042f482423a79fc5b2fae3da739&format=json&filters[state]=${encodeURIComponent(state)}&filters[district]=${encodeURIComponent(district)}`)
    .then((res) => res.json())
    .then((data) => {
        if(data.records.length===0){
           output.innerHTML = "Data NOT Found" 
        }
        console.log(data)
        let box = " "
        data.records.forEach(item => {
            box = box + `<div class="max-w-sm bg-white rounded-2xl shadow-md p-5 border border-gray-200">
  <!-- Top Section -->
  <div class="flex items-center justify-between">
    <h2 class="text-lg font-bold text-gray-800">${item.commodity}</h2>
    
    <p class="text-lg font-semibold text-gray-700">₹ ${item.modal_price}</p>
  </div>

  <!-- Yield -->
  <p class="text-sm text-gray-500 mt-1">अपेक्षित उपज: 28 q/acre</p>

  <!-- Gauge Placeholder -->
  <div class="mt-4 flex justify-center">
    <div class="w-32 h-16 relative">
      <!-- background arc -->
      <div class="absolute inset-0 rounded-full border-t-8 border-gray-200"></div>
      <!-- green arc -->
      <div class="absolute inset-0 rounded-full border-t-8 border-green-500 w-2/3"></div>
      <!-- red arc (right side) -->
      <div class="absolute right-0 top-0 h-16 w-16 border-t-8 border-red-500 rounded-full"></div>
    </div>
  </div>

  <!-- Bottom Section -->
  <div class="flex items-center justify-between mt-4">
    <h3 class="text-xl font-bold text-gray-800">${item.modal_price} ₹ / Quintal</h3>
    <span class="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
      ${item.variety}
    </span>
  </div>
</div>`
output.innerHTML = box
        });
        
    })
    

