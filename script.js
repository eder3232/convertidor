const $mca = document.querySelector('#mca > input')
const $kgcm = document.querySelector('#kgcm > input')
const $psi = document.querySelector('#psi> input')
const $bar = document.querySelector('#bar> input')

function roundNum(num) {
  return Math.round(num * 1000) / 1000
}

$mca.addEventListener('input', () => {
  const mca = parseFloat($mca.value)

  $kgcm.value = roundNum(mca * 0.1)
  $psi.value = roundNum(mca * 1.422)
  $bar.value = roundNum(mca * 0.0981)
})

$kgcm.addEventListener('input', () => {
  const kgcm = parseFloat($kgcm.value)

  $mca.value = roundNum(kgcm * 10)
  $psi.value = roundNum(kgcm * 14.22)
  $bar.value = roundNum(kgcm * 0.981)
})

$psi.addEventListener('input', () => {
  const psi = parseFloat($psi.value)

  $mca.value = roundNum(psi / 1.422)
  $kgcm.value = roundNum((psi * 0.1) / 1.422)
  $bar.value = roundNum((psi * 0.0981) / 1.422)
})

$bar.addEventListener('input', () => {
  const bar = parseFloat($bar.value)

  $mca.value = roundNum(bar / 0.0981)
  $kgcm.value = roundNum((bar * 0.1) / 0.0981)
  $psi.value = roundNum((bar * 1.422) / 0.0981)
})
