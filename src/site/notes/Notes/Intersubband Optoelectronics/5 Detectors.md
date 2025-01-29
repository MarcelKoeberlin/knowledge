---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/5-detectors/","hide":"true","updated":"2025-01-29T20:54:11.128+01:00"}
---

Jump back to [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/5 Detectors#5.1 Noise\|5.1 Noise]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.2 Black-Body Radiation\|5.2 Black-Body Radiation]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.3 Bolometer\|5.3 Bolometer]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.4 Photoconductors\|5.4 Photoconductors]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.5 Pneumatic Detector: Golay Cell\|5.5 Pneumatic Detector: Golay Cell]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.6 Electro-Optic Sampling\|5.6 Electro-Optic Sampling]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.7 Grating Spectrometer\|5.7 Grating Spectrometer]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.8 FTIR (Fourier Transform Infrared)\|5.8 FTIR (Fourier Transform Infrared)]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.9 Lock-In Amplifier\|5.9 Lock-In Amplifier]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.10 Quantum Well Infrared Photodetector (QWIP)\|5.10 Quantum Well Infrared Photodetector (QWIP)]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.11 The Blip Condition\|5.11 The Blip Condition]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.12 Two-Photon QWIP\|5.12 Two-Photon QWIP]]
- [[Notes/Intersubband Optoelectronics/5 Detectors#5.13 Quantum Cascade Detector (QCD)\|5.13 Quantum Cascade Detector (QCD)]]

---
# 5 Detectors

Detectors measure the response to incoming radiation, characterized by metrics like responsivity and detectivity .

- Responsivity ($R$): Measures how much current or voltage is produced per unit power hitting the detector:
  $$
  R = \frac{e}{\hbar \omega} \eta_{\text{phot}},
  $$
  in units of $\frac{\text{A}}{\text{W}}$ or $\frac{\text{V}}{\text{W}}$, where $\eta_{\text{phot}}$ is the quantum efficiency.

- Detectivity ($D^*$): Indicates the sensitivity of a detector, normalized for area $A$ and bandwidth $\Delta f$:
  $$
  D^* = \frac{\sqrt{A \cdot \Delta f}}{\text{NEP}},
  $$
  where NEP (Noise Equivalent Power) represents the optical power required to achieve a signal-to-noise ratio (SNR) of 1.

---
## 5.1 Noise

The signal-to-noise ratio (SNR) is:

$$
\frac{S}{N} = \frac{i_s}{i_N},
$$

where $i_s$ is the signal current and $i_N$ is the noise current. 

Types of noise:
1. Shot noise : Due to the fundamental randomness of photocurrent.
2. Photon noise : Related to the photon source's nature.
3. Background noise : Primarily from black-body radiation.
4. Detector noise : Includes all other sources.

- Dark current : Current present without photoexcitation, caused by thermal excitation.
- Noise-equivalent-temperature-difference (NETD): The temperature difference required for the background to produce the measured RMS signal.

---
## 5.2 Black-Body Radiation

Black-body radiation is the primary source of background noise:

>[!info] Image

At room temperature, it peaks in the mid-infrared (MIR) range.

---
## 5.3 Bolometer

A bolometer absorbs incoming radiation, causing a temperature rise in the absorber above the thermal reservoir:

$$
T_{\text{bolo}} = T_0 + \frac{P_{\text{opt}}}{G} \left(1 - e^{-t \frac{G}{C}}\right),
$$

where:
- $G$: Thermal conductivity.
- $C$: Heat capacity.

Smaller $G$ and $C$ improve sensitivity. For a harmonic signal, the response is:

$$
|\Delta T(\omega)| = \frac{P}{\sqrt{G^2 + \omega^2 C^2}}.
$$

>[!info] Image

Bolometers work best at low temperatures, where background radiation is minimal. Hot-electron bolometers (HEBs) :
- Operate at cryogenic temperatures.
- Achieve high sensitivity due to changes in resistance from absorbed power.
- Cover a wide range of frequencies and respond rapidly.

---
## 5.4 Photoconductors

Photons generate a current by exciting charge carriers. 

- Operate below 4 K to suppress thermal excitations.
- For short wavelengths , intrinsic semiconductors are used.
- For long wavelengths (THz) , extrinsic semiconductors with donor states are utilized to match the photon energy.

---

## 5.5 Pneumatic Detector: Golay Cell

The Golay cell uses acoustic readout. Absorption heats a gas, causing expansion:

>[!info] Image

The expansion deforms a reflective membrane, altering the signal. 
- Advantages : Room-temperature operation, high sensitivity, and flat response.
- Disadvantages : Slow response.

---
## 5.6 Electro-Optic Sampling

This method measures time-dependent amplitudes using:
- An ultrafast laser.
- The Pockels effect , where the refractive index depends on voltage.
- A nonlinear crystal for pump-probe experiments.

---
## 5.7 Grating Spectrometer

>[!info] Image

A grating spectrometer separates light into its constituent wavelengths. 

- Limited sensitivity due to slit-based operation.
- High resolution requires narrow slits, as $\Delta \lambda / \lambda \sim 1/N$ for $N$ grating lines.

---
## 5.8 FTIR (Fourier Transform Infrared)

FTIR spectrometers analyze spectra using interferometric techniques:

>[!info] Image

---
## 5.9 Lock-In Amplifier

A lock-in amplifier extracts weak signals in noisy environments by mixing the signal:

$$
V(t) \cdot V_R(t) = \frac{V_0}{2} \left(\cos\phi - \cos(2\omega_R t + \phi)\right).
$$

A low-pass filter removes high-frequency components, leaving a DC signal.

---
## 5.10 Quantum Well Infrared Photodetector (QWIP)

A QWIP is an artificial photoconductor with $N_w$ quantum wells. Using the slowly-varying envelope approximation, the energy levels are designed to match low-energy photons:

$$
\hbar \omega = E_2 - E_1 \quad (3-20 \, \mu\text{m}).
$$

Design features:
- Thick barriers eliminate tunnel coupling.
- Bias applied for probabilistic trapping and emission.
- Responsivity depends on escape efficiency , not absorption.

Responsivity:

$$
R = \frac{q_0}{\hbar \omega} \eta g_{\text{photo}} \sim \frac{1}{N_w},
$$

where $g_{\text{photo}}$ is the photoconductive gain:

$$
g_{\text{photo}} = \frac{p_e}{p_c N_w}.
$$

- High absorption does not guarantee high responsivity; efficient escape is key.
- Experiments show absorption increases with $N_w$, but photocurrent remains independent.

---
## 5.11 The Blip Condition

The BLIP temperature is when the dark current equals background photon noise. Maximizing $T_{\text{Blip}}$ without significantly reducing $D^*$ is desirable.

Key points:
- Total current: $I_{\text{tot}} = I_{\text{dark}} + I_{\text{phot}}$.
- $T_{\text{Blip}}$ decreases with increasing detection wavelength due to lower photon energy.

---
## 5.12 Two-Photon QWIP

Two-photon processes involve a non-linear response :

>[!info] Image

Applications include interferometric autocorrelation of ultrashort pulses. The non-linear response enables detection at low powers.

---
## 5.13 Quantum Cascade Detector (QCD)

QCDs are photovoltaic detectors:
- Operate without applied bias, resulting in low dark current.
- Chirping creates an effective electric field for cascading.

Transport occurs via tunneling. 

Challenges:
- Johnson noise is high at room temperature due to low resistance:
  $$
  i_{\text{Johnson}} \sim \frac{1}{\sqrt{R}}.
  $$

Solution:
- Diagonal transitions improve resistance and reduce noise, but lower overlap.
- Deeper wells (e.g., using different semiconductors) allow higher frequencies.

QCDs are fast and tunable for various wavelengths.

---