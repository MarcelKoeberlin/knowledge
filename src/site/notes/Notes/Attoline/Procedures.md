---
{"dg-publish":true,"dg-path":"procedures","permalink":"/procedures/","hide":"true","hideInGraph":"true","updated":"2026-03-05T16:12:33.202+01:00"}
---

**Table of Contents**

[[Notes/Attoline/Procedures#1. GitHub Repositories\|1. GitHub Repositories]]
[[Notes/Attoline/Procedures#2. ATAS Measurement Protocol\|2. ATAS Measurement Protocol]]
[[Notes/Attoline/Procedures#3. Beam Overlap\|3. Beam Overlap]]
[[Notes/Attoline/Procedures#4. RABBITT\|4. RABBITT]]
[[Notes/Attoline/Procedures#5. Venting and Purging Chambers\|5. Venting and Purging Chambers]]
[[Notes/Attoline/Procedures#6. SPIDER\|6. SPIDER]]
[[Notes/Attoline/Procedures#7. Swapping Samples\|7. Swapping Samples]]
[[Notes/Attoline/Procedures#8. Changing the TOF Nozzle for RABBITT\|8. Changing the TOF Nozzle for RABBITT]]
[[Notes/Attoline/Procedures#9. Archive\|9. Archive]]

**Important:** This document is meant as a guide and reminder for the attoline lab at ETH Zurich. Do not forget to think before you do anything!

## 1. GitHub Repositories
Since February 2026, 99% of tools and measurement programmes run on Python. All code is stored in private GitHub repositories. If you are a new PhD student and need access, send a message to Marcel Köberlin. You can find most repositories on the lab PCs; always ensure they are updated to the latest version.

| Repository                    | Status     | Description                                                                                                                                                                                      |
| :---------------------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AttoCode**                  | Active     | Main repository. Contains XUV spectrometer, code for OceanOptics, Lucid cameras, Grafana, MRC beam stabilisation, pressure readers, Rigol spectrum analyser, and Coherent FieldMax power meters. |
| **rabbitt-attoline**          | Active     | Code to run a RABBITT measurement. Bundled with mcs6a.exe, but needs to be installed for the .dll to be found.                                                                                   |
| **attoline-temporal-overlap** | Active     | Semester project aiming to automate temporal overlap.                                                                                                                                            |
| **attoline-spatial-overlap**  | Active     | Semester project aiming to automate spatial overlap.                                                                                                                                             |
| **OceanOptics**               | Deprecated | Now contained within AttoCode.                                                                                                                                                                   |
| **Raspberry-Code Delaystage** | Deprecated | Now contained within AttoCode.                                                                                                                                                                   |
| **Lucid-API**                 | Deprecated | Now contained within AttoCode.                                                                                                                                                                   |

---

## 2. ATAS Measurement Protocol
**Note:** The main measurement PC is the top-left monitor. 

### Initial Setup
1. Turn on the trigger using the trigger box. Do not set PPAS * SPSS to less than roughly **100**.
2. Open `visualiser.exe` from the taskbar to align XUV counts, SHG spectrum, and the IR mode.
3. Turn on the shutter chiller.
4. Open the crank between the sample and target chamber.
5. Turn on the stepper motor, open the VAB programme (COM3 position, set COM port, 'online'), and move the sample down while checking the HHG counts.

### Sample Alignment
1. Always monitor the Razer camera. You should not go much above y = **4.5 mm**.
2. There are 9 squares per grid (one is larger); each is **250 µm²** with a **300 µm** distance between them.
3. Scan the sample holder first. Find the samples, note their positions, and note the positions of empty holes. 
4. The counts will disappear at the bottom of the sample holder, around z = **35 mm**.
5. Once the sample is found, note the position.
6. Set the pump power to **1 mW**.
7. Perform the spatial and temporal overlap (see Section 3).

### Measurement Execution
1. Use the trigger box to set parameters. After every change, hold 'reset' for a few seconds.
    * **PPAS:** Pulses per acquisition state (approximate exposure time).
    * **SPSS:** Shots per shutter state.
    * **SPDS:** Shots per delay state.
2. Open `atasMAIN.exe` from the taskbar.
3. Go to settings and select either Piezo or ESP (delay stage).
4. Input the identical settings from the trigger box.
5. As a rule of thumb, the exposure time should be lower than **(PPAS * 0.97 - 9) ms**; otherwise, the XUV spectrometer lacks sufficient time between shots.
6. Turn on the shutter controller, set to 'remote' and 'N.O.', then press reset.
7. Turn off the stepper motor, filter power sockets, and the room light.
8. Press start. The code will wait for a trigger signal; go to the trigger box and hold start.

---

## 3. Beam Overlap
Overlap is performed without filters and without gas by comparing both red pulses.

### 3.1 Spatial Overlap
1. Align the beam on the DataRay camera and mark the position with the mouse crosshair.
2. Close the probe shutter (the main point will vanish).
3. Turn on the electronic shutter controller.
4. Align the probe on the crosshair using controller 1 (2AB). Ensure you are not tracking a reflection.
5. Optimise the beam shape using controller 2 (3AB).
6. Repeat adjustments with 2AB and 3AB until both shape and position are optimal.

### 3.2 Temporal Overlap
1. Open the probe shutter.
2. Start OceanOptics to view the spectrum.
3. For RABBITT measurements: Set the piezo to **4.5 V** (preset 'reset').
4. Maximise the signal using the mirror located before the 'wheel' but after the beam splitter.
5. Maximise the interference fringes using the motion controller ('Move relative position').
6. Record the final position.

---

## 4. RABBITT
1. Turn off the gauge below the table corner (CH2 = TOF).
2. Pump the tubes and monitor the pressure on the right display. The 'target gas' should drop and eventually settle around **1500**.
3. Open everything on the left side of the target window (the thin tube behind the power meter).
4. Set the manometer to **330**.
5. Turn on the pre-amp current and the FASTcomtec sockets.
6. Measure the IR power and set it with 1AB to roughly **1 mW**.
7. Use the **100 nm** filter for the XUV (note that it will saturate).
8. Overlap the beams spatially and temporally.
9. Open the TOF gas at the bottle, and ensure the gas before and after the manometer is open.
10. Drive the nozzle in to the marked line.
11. Turn on the trigger (located below the intralux).
12. Start `RABBITT.exe` from the taskbar. Select 'continuous' with **3000** accumulations.
13. Slowly ramp up the MCP voltage using the right knob. Expect counts over **1.95 V**. Target roughly **4000** counts, but strictly do not exceed **2.1 V**. The counts will drop during the first few minutes, which is normal.
14. Optimise the signal by adjusting the nozzle. If counts appear at excessively high energies (usually above **1200 ns**), the metal is clipping the beam. Use the Razer camera to check.
15. Open the IR beam with the electronic shutter controller.
16. Use 'delay scan mode' from **0 fs** to **200 fs** in steps of **2 fs**.
17. Once the pulse is found, reduce the step size to **0.3 fs** around the pulse to sample it properly.

---

## 5. Venting and Purging Chambers

### 5.1 Venting Chambers
**Preparation for any chamber:**
1. Separate the target chamber from the others by closing the black valves.
2. Close the pre-vac valve leading to the specific chamber.

**Venting the Generation Chamber:**
1. Block the beam in E8.
2. Move all filters out of the beam path.
3. Ensure the shutter chiller is switched off.
4. Shut down the four (or five, if venting the first chamber too) turbo pumps labelled 'Front Unit'.
5. Remove the KF flange on the second chamber to prevent over-pressure.
6. Open the nitrogen valve on the wall to approximately **0.6 bar** (red line).
7. Once the turbos have spun down, open the nitrogen valve at the first chamber to begin purging.
8. Wait until the KF flange can be easily removed (usually when the focusing chamber reaches roughly **7e+2 mbar**).
9. Close the nitrogen valves at both the first chamber and the wall.

**Venting the Back Part:**
1. Move the filter in front of the camera out of the way.
2. Shut down the 'cross chamber' and 'surface' turbos (located on the right side of the pressure reader; 2 out of 5).
3. Turn off the camera.

**Working with the laser while vented:**
1. Block the beam before it enters any chamber.
2. Reduce the laser power in E8 to roughly **600 mW**.
3. Remove the OD filters before the photodiodes used for beam stabilisation, if necessary.
4. Shut down any turbo pumps still connected to the open chamber.
5. Once the turbo has spun down to nearly **0 Hz**, flush with nitrogen (**0.6 bar** at the wall).
6. Open the chamber.

### 5.2 Purging Chambers
1. Close all pre-vac valves except the one connected to the chamber you are purging.
2. Wait until the pressure drops to roughly **3e-1 mbar**, then switch on the turbo pumps.
3. Once the turbos have spun up and the pressure reaches **1e-4** to **1e-5 mbar**, open all other pre-vac valves.
4. For the generation chamber: Rotate the filters back into position.

---

## 6. SPIDER
>[!Information] SPIDER is often unreliable. It frequently predicts clean pulses, whereas RABBITT will reveal if the pulse is actually poorly compressed.

1. Outcouple the probe (HHG) arm using the same mirror used for spatial and temporal overlap.
2. Use the mirrors after the power meter to direct the beam through the black tunnel.
3. Connect the SPIDER laptop to the SPIDER box.
4. Follow the introductory manual step-by-step.

---

## 7. Swapping Samples
1. Close the pre-vac valve to the upper turbo (labelled 'turbo manipulation chamber').
2. Turn the drives 'on' at the stepper motor controller and use the joystick.
3. Drive the sample to the top position using the z-axis.
4. Use the crank to separate the top section from the bottom.
5. Turn off the 'turbo manipulation chamber' pump.
6. Wait **45 to 60 minutes** for the turbo to spin down completely.
7. While waiting, prepare a new copper ring, the required screw tools, and aluminium foil.
8. Once the turbo is near **0 Hz**, open the nitrogen valve.
9. Put on gloves, a lab coat, and a hair cover.
10. Remove the screws. Reach inside the chamber to loosen the bottom two screws by hand (do not remove them completely).
11. Swap the sample.
12. Close the window, ensuring you use the new copper ring and tighten the screws.
13. Purge the chamber following the standard procedure (Section 5.2).

---

## 8. Changing the TOF Nozzle for RABBITT
>[!Information] It is highly recommended to align the alignment laser before starting this process.

1. Vent the target, TOF, and manipulator chambers (the manipulator chamber has the nitrogen valve).
2. Remove all cables from the TOF (the single centred green cable and the surrounding red ones).
3. Remove the large flange on the window side.
4. **Note:** The old nozzle was **5 cm** long; the new one is **4 cm** long. It is bent forward (in the beam direction) to help visualise scattering on the bottom camera.
5. The nozzle is glued with Ted Pella Silver conductive epoxy to a rod. This rod connects via Swagelok to the alignment stage.
6. **Warning:** The alignment stage behaves unreliably at the extremes of its travel range. Near the end of its travel in the beam direction, it drops downwards instead of moving forwards. 
7. Use a chisel to remove the old epoxy (it cures exceptionally hard).
8. Clean the rod thoroughly using isopropanol, acetone, and finally an ultrasonic bath.
9. Glue the new nozzle. Using a hot plate accelerates the curing process.
10. Reattach the rod to the alignment stage.
11. Clean everything, including the inside of the chamber, with isopropanol and acetone.
12. Close the flange, tightening the bolts to **20–25 Nm** with a ratchet.
13. Wait for the vacuum pressure to drop.
14. Let a small amount of gas through the nozzle to verify a pressure rise. With the manometer set to **295**, the TOF pressure should read between **1e-5** and **2e-5 mbar**.
15. Degas the gauges using the controller (note that not all gauges support this).
16. Wrap heating tape around the entire beamline section encompassing the TOF, manipulator chamber, target chamber, and the very top section.
17. Bake out the system at **100°C** to evaporate any residual water in the TOF. Always monitor this with temperature sensors.
18. Reattach the TOF cables before starting any measurements.

---

## 9. Archive 
>[!Info] These instructions are deprecated or cover basic procedures meant for training.

### 9.1 Laser Startup
**In E6.2:**
1. Switch on the Evo30 chiller. Check the coolant level and ensure the temperature is at **24°C**.
2. Close the gas ballast valve on the scroll pump connected to the Ti:Sa chamber in the amplifier.

**In E8:**
1. Check the Element2 and Rainbow chillers; ensure sufficient coolant and a temperature of **19°C**. Room temperature should be around **22°C**.
2. Check the Ti:Sa chamber pressure via the floor sensor. It must not exceed **5e-2 mbar**.
3. Turn the Evo30 key. Configure the Q-Switch settings on the laptop to 'external trigger'.
4. Turn the laser on (hold the RUN button; 'laser active' must turn green) at a low current (below **9.4 A**). The system will beep.
5. Turn on the crystal chamber heating.
6. Turn on the Ti:Sa amplifier chiller. 
>[!Info] Note: If turned off, you must wait 30 minutes before turning it on again.
7. Start the Element2 automatic startup sequence.
8. Wait for the ACU temperature to drop. Gradually ramp the Evo30 current to **17.9 V** as it cools. It should equilibrate around **193 K**. Chamber pressure must stay below **9e-2 mbar**.
9. Once Element2 has started, open the shutter. (See Section 9.2 if automatic startup fails).

**CEP Stabilisation (if used):**
1. Turn on beam stabilisation.
2. Verify the f-2f beating signal is around **104 MHz** at **-29 dBm**. Adjust the mirrors before the photodiodes if necessary.
3. Move the wedges in the Element2 software to shift the peak to the centre (around **-30 dB**). The delta value on the CEP box should decrease.
4. Turn on the slow loop, followed by the RF power amp at the CEP4 control module.
5. Wait roughly 30 minutes for the beat signal to stabilise. 
>[!Danger] Do not check the AOFS signal while the RF amp is on to avoid damage.
6. Align the XY1 and XY2 mirrors on diodes QD1 and QD2, then enable stabilisation.
7. Switch on the Pockels cell, turn on the Dazzler, and load the appropriate settings. Dazzler power must remain below **5%**.
8. Set calibration to external. A software restart usually fixes PORT7 communication errors.
9. If a 'digital lock failed' error occurs, the Dazzler trigger is insufficient. Plug the output from the diode left of 'QD Mon2' into an oscilloscope and align the front mirror to roughly **330 mV**.
10. Measure the seed power before coupling into the amplifier (ensure the photodiode does not exceed **300 mV**).
11. Remove the beam block to seed the amplifier. Output power should immediately be around **1.7 – 1.9 W**.
12. Allow the crystal to remain seeded for one hour; the power will naturally increase to roughly **1.9 W**.

**Power Stabilisation (if required):**
1. Use higher Dazzler settings (10% is routed for stabilisation).
2. Check the pointing on the monitor and QD3. Realign mirror XY3 if necessary.
3. Turn on XY3 beam stabilisation.
4. Ensure no more than **1.26 W** is sent to E6.

### 9.2 Modelocking and Element 2 Alignment
1. Place a power meter (PM) in front of Element 2.
2. Use the software to align the output coupler and end mirror for maximum CW power.
3. Observe the mode on the PM and scan through the stability range in steps of **100**.
4. At each step, press the modelock button roughly 10 times. Look for positions where the mode jumps, brightens, or the spectrum drastically changes.
5. Adjust the wedge at the most responsive position until modelocking is achieved.
6. Adjusting FWHM: Deeper wedge insertion results in a narrower spectrum/smaller FWHM.
7. Re-adjust the output coupler and end mirror if the wedge is moved significantly (the x-axis is highly sensitive).
8. Press 'state 2' in the Element2 software to stabilise p[[]]ower at **630 mW**.

### 9.3 High-Harmonic Generation
1. Insert beam blocks 1 and 2.
2. Close the iris.
3. Place a beam block after the fibre.
4. Turn on beam stabilisation. Realign if necessary using the focusing mirror or the two piezo mirrors immediately preceding the fibre.
5. Open the iris and verify the mode quality.
6. Close the shutter and remove the beam block.
7. Insert the **600 nm** filter and monitor using the bottom-right screen.
8. Close the gas bottle and HHG valve. Fully open the pressure pre-regulator.
9. Open the pump valves and start the pump. Wait one minute, then stop the pump and close the valves.
10. Fully close the pressure pre-regulator, then open the HHG gas.

### 9.4 Laser Shut-down
**In E8:**
1. Turn off beam stabilisation 3.
2. Measure the final power, then block the seeding.
3. Turn off the crystal chiller. The temperature will rise slowly.
4. Wait for the temperature to reach **250°C**, then ramp the Evo voltage down from **17.9 V** to **7 V** before turning it off.
5. Turn off the Evo 30 (black box).
6. Ramp down the Pockels cell.
7. Turn off the Dazzler.
8. Turn off beam stabilisations 1 and 2.
9. Turn off the crystal chamber heating.

**In E6.2:**
1. Turn off the chiller.
2. Turn off the ballistic system.
3. Set the pressure pre-regulator (approximately **60**).
4. Open both vacuum valves.
5. Turn on the camera (power supply is located behind it).
6. Start the LabVIEW software.
7. Move the mirror up, introduce the HHG gas, and open the shutter.
8. Optimise counts slightly if they appear.
9. Close the gas to the vacuum chamber to let the system warm up without wasting gas.
10. Close the shutter.

### 9.5 10-Pass Alignment
1. Connect the photodiode to the oscilloscope.
2. Use the insertable mirror to align pass by pass (specifically passes 2, 4, 8, and 10).\
3. More to follow eventually possibly maybe

### 9.6 Old ATAS
1. Start the STRA programme and set it to Newport. The delay should drop to a large negative number (around **-50000**), which marks the zero of your temporal overlap.
2. Turn off the stepper motor, power strip, and lights.
3. Ensure 'stop program after current step' is **not** selected.
4. Set the shutter controller to 'remote'.
5. Start the measurement roughly **200 fs** prior to the zero point.

### 9.7 Old RABBITT
1. Turn off the gauge below the table corner (CH2 = TOF).
2. Pump the tubes; 'target gas' on the right display should drop to around **1500**.
3. Open the lines on the left side of the target window.
4. Set the manometer to **330**.
5. Turn on the pre-amp current and FASTcomtec sockets.
6. Set IR power to roughly **1 mW**. Overlap the beams spatially and temporally.
7. Open the TOF gas at the bottle, and before/after the manometer.
8. Set the manometer to **295**.
9. Drive the nozzle to the line and insert the **100 nm** filter.
10. Turn on the trigger, start the MCS6A programme, and start Attoline (device set to FAST, **3000** accumulations).
11. **Crucial:** Click 'save to file' before starting to ensure it saves an STK file rather than a largely empty TOF file.
12. Open the shutter. Ramp the MCP voltage slowly to roughly **2000** counts (expect counts above **1.95 V**, maximum **2.1 V**).
13. Optimise nozzle placement. If counts are too high, the metal is clipping the beam.
14. Scan settings: **100** steps, **2 fs** delta, **0** start (0 V).
15. Open the IR beam. Readjust voltage if necessary. Once the pulse is found, constrain the scan from the start point to the end point.