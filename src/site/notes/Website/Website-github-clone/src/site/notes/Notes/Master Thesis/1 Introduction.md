---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/master-thesis/1-introduction/","updated":"2025-07-03T20:20:02.055+02:00"}
---


Jump back to ==[[Notes/Master Thesis/Master Thesis#Table of contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Master Thesis/1 Introduction#1.1 History of Lasers and Modelocking\|1.1 History of Lasers and Modelocking]]
[[Notes/Master Thesis/1 Introduction#1.2 The Rise of Thin-Disk Lasers\|1.2 The Rise of Thin-Disk Lasers]]
[[Notes/Master Thesis/1 Introduction#1.3 Noise in different architectures\|1.3 Noise in different architectures]]
[[Notes/Master Thesis/1 Introduction#1.4 Final Goal of This Thesis\|1.4 Final Goal of This Thesis]]
[[Notes/Master Thesis/1 Introduction#1.5 The Structure of the Thesis\|1.5 The Structure of the Thesis]]

---
# 1 Introduction

## 1.1 History of Lasers and Modelocking

The history of laser technology began with the groundbreaking theories proposed by Albert Einstein in the early 20th century on stimulated emission, which laid the foundational principles of laser physics. The practical realisation of these theories commenced with Theodore Maiman's creation of the first ruby laser in 1960. Since then, lasers have revolutionised numerous fields, from communication and medicine to manufacturing and scientific research. The evolution of lasers has been characterised by significant breakthroughs, particularly in the domain of pulse generation techniques such as modelocking. Introduced in the 1960s, modelocking has enabled a new realm of precision and control in various applications, including spectroscopy, material processing, and medical diagnostics.

---
## 1.2 The Rise of Thin-Disk Lasers

In the realm of high-power laser applications, thin-disk lasers (TDLs) have emerged as a prominent solution due to their unique design and operational advantages. Traditional laser amplification chains, while effective, often face challenges such as nonlinear effects, pulse distortion, and system complexity. These chains start with low-power oscillators whose output passes through amplifiers to achieve high-power levels. Common amplifier systems include fibre amplifiers, slab amplifiers, and thin-disk amplifiers. However, amplifiers introduce additional noise sources, such as amplified spontaneous emission (ASE).

In contrast, TDLs maintain excellent beam quality while effectively dissipating heat, even at high power levels. They achieve high output power directly from the oscillator without requiring subsequent amplification stages, making TDLs highly suitable for applications requiring high power and precision, such as material processing, medical procedures, and scientific research, particularly in high-harmonic generation. Low noise at MHz repetition rates is essential for specific applications, such as pump-probe measurements requiring low noise and a high signal-to-noise ratio. Another application of high-power oscillators is frequency conversion at MHz repetition rates, such as generating attosecond pulses at MHz repetition rates.

---
## 1.3 Noise in different architectures

The noise characteristics of high-power laser systems depend significantly on whether a high-power oscillator or a master oscillator power amplifier (MOPA) system is used. In the typical MOPA concept, a low-power oscillator is combined with an amplifier. Here, the noise of the initial oscillator, ideally approaching its shot noise limit, sets a baseline for the system's noise performance. However, amplifiers invariably introduce additional noise, often significantly above this baseline.

As argued in this thesis, one must start with a high-power oscillator to achieve the theoretically lowest shot noise. However, not all oscillator architectures support shot-noise-limited performance; in particular, there is a distinction between two competing, well-established architectures: fibre and solid-state. Fibre laser oscillators can typically only provide very limited output power and thus must be combined with an amplifier to achieve meaningful powers, typically exceeding $1\,\mathrm{W}$. However, such a system cannot reach shot-noise-limited performance because of the high contribution to the noise from amplified spontaneous emission (ASE) inherent to the system's geometry. Furthermore, reabsorption effects in high-power amplifiers can also play a role in further deteriorating noise performance.

Solid-state lasers can be built as high-power oscillators (typically with thin-disk lasers, as done here) or as part of an amplifier system. Several noise contributions are present in these systems, but typically do not outweigh the shot noise at high frequencies. Therefore, these lasers are often shot-noise-limited and thus possess an architectural advantage over fibre laser systems. The reason ASE does not play as significant a role here is due to the shorter gain interaction length and less guiding of the spontaneous emission compared to fibre lasers. Although greater care must be taken in the design of these solid-state systems to address mechanical noise, the ultimate limit is primarily the shot noise of the solid-state oscillator employed.

---
## 1.4 Final Goal of This Thesis

The primary objective of this thesis is to demonstrate that high-power oscillators can achieve the lowest shot noise limit among high-power lasers by avoiding amplifiers. To achieve this, we employ a nonlinear process using a hollow-core gas-filled fibre at high pressure. This strong spectral broadening allows us to infer noise levels that are below the detection threshold of conventional instruments. The key to this approach is that small fluctuations in oscillator power inherently induce significant variations in the broadened spectrum, resulting in a substantial noise gain.

The current record for the lowest measured shot noise level is $-183\,\mathrm{dBc/Hz}$, achieved by using photodetector in reflection in combination with optical AC coupling. We aim to infer a shot noise level below $-190\,\mathrm{dBc/Hz}$, potentially setting a new benchmark for noise measurement in high-power lasers. This advances us closer to the anticipated true shot noise level of the oscillator, estimated at around $-202\,\mathrm{dBc/Hz}$.

---
## 1.5 The Structure of the Thesis

The thesis is organised as follows:

- [[Notes/Master Thesis/2 Theory\|Chapter 2]] presents the theoretical framework essential for this research. It begins with an in-depth explanation of soliton modelocking, starting from the nonlinear Schrödinger equation. A refresher on key concepts such as power spectral densities, relative intensity noise, and signal-to-noise ratio is provided. This chapter also includes an examination of shot noise in lasers and the theory behind spectral broadening, along with its simulation methods.
- [[Notes/Master Thesis/3 Setup, Characterisation and Results\|Chapter 3]] describes the design and characterisation of the TDL cavity, including its stability and the rationale behind various design choices. The characterisation process is detailed, covering beam diagnostics, power slope measurements, and noise characterisation. The chapter also explains fibre coupling techniques, such as beam stabilisation, power tuning, and polarisation control. Additionally, the design and analysis of the grating spectrometer's spectral resolution are discussed. The methodology for obtaining accurate noise measurements is presented, with an emphasis on signal processing techniques.
- [[Notes/Master Thesis/4 Conclusion and Outlook\|Chapter 4]] concludes the thesis by summarising the key findings, outlining the contributions of this research, and suggesting potential directions for future studies.
- [[Notes/Master Thesis/5 Appendix\|Chapter 5]] contains the appendix with additional information on details not deemed important enough to retain in the main text.

---