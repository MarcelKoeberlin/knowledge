---
{"dg-publish":true,"permalink":"/notes/attoline/procedures/","hide":"true","hideInGraph":"true","updated":"2025-07-24T14:08:40.000+02:00"}
---

# 1 Laser Startup
E6.2:
- Switch on the chiller of the Evo30, check coolant level and temperature ($23 ^\circ$)
- Close the gas ballast valve on the scroll pump connected to the Ti:Sa chamber in the amplifier

E8:
- Block the seed
- Check that the two chillers of Element2 and rainbow have enough coolant and the right temperature ($19^\circ$)
- Room temperature should be around $22^\circ$
- Check Ti:Sa chamber pressure with the sensor on the ground. Should not be above $\text{5.2e-2}$ mbar
- Flip the Evo30 key
- Configure Q-Switch settings of Evo30 (on shitty laptop) to external trigger. 
- Turn on (hold RUN button, 'laser active' must be green) at low current (below 9.4 A)
- Turn on crystal chamber heating
- Turn on the Ti:Sa amplifier chiller. If you turn this one off (to restart the process for example), you must wait 30 minutes before turning it on again.
- Wait until the temperature on the ACU decreases. Start automatic startup of Element2
- Gradually ramp up the Evo30 current to 17.9 V as the temperature decreases. It should equilibrate around $193$ K.
- Pressure of chamber should not rise about $\text{9e-2}$ mbar
- After the Element2 started up, open the shutter
> [!Info] See [[#2 Modelocking and Element 2 Alignment]] if automatic startup fails.

- If the CEP stabilisation is used:
	- check that the f-2f beating signal is around 104 MHz and at -30 dBm
		- If necessary, use the CEP4 incoupling mirrors to improve the signal
		- Moving **wedges** in Element2 software shifts the peak to centre, such that it is around $-30$ dB.
		- Delta value on CEP box should decrease.
	- Wait for some time (~30 minutes) before stabilisation of the beat signal
- Turn on slow loop, then the RF power amp at the CEP4 control module
> [!DANGER] Do not check the AOFS signal when the RF amp is on, otherwise damage is done	

- Align the XY1 and XY2 mirrors on the diodes QD1 and QD2. Enable stabilisation
- Switch on the Pockels cell, turn the Dazzler on and load appropriate settings
	- Dazzler power should be below 5%. 
	- Dazzler uses PORT7 (but has ugly name with 7 in it)
	- Calibration must be set to external	
	- A software restart will fix most errors and re-initialising communication with PORT7 
	- If you get the 'digital lock failed' error, the trigger for the Dazzler is not good enough. Take output from the diode on the left of the 'QD Mon2' and plug it into an Oscilloscope. Align with the mirror in front of it to roughly 330 mV.
- Measure the seed power before coupling into the amplifier (check that the photodiode does not measure above 0.3 V)
- Remove beam block, and seed the amplifier 
- Quickly check output power, should be around 1.7 - 1.9 W
- Leave the crystal seeded for one hour before continuing, power will have increased to roughly 2 W
	- Else, improve alignment or increase Dazzler power 
	- Do not align too much if amplifier is already warmed up
- Check pointing on monitor and on QD3. Realign the XY3 mirror if necessary.
- Turn on XY3 beam stabilisation
- Make sure not more than 1.26 W are sent to E6

---
# 2 Modelocking and Element 2 Alignment
- Place a powermeter (PM) in front of the Element 2
- Align output coupler and end mirror in software to maximum CW power
- By eye, check the mode on the PM and scan through stability range (steps of 100 should be sufficient).
	- For each stability range step, click on the button that tries to modelock around 10 times.
	- Check by eye, where the mode is jumping or getting brighter (or the spectrum changes).
	- Try to find the step where the most drastic changes happen and also the most often.
	- At that position, adjust the wedge until you can modelock.
- To adjust the FWHM: Larger wedge insertion makes the FWHM smaller/spectrum narrower.
- If wedge has been moved a lot, re-adjust the OC, then the EM. Especially the x-axis is sensitive to wedge movement. 
- Press 'state 2' in Element2 software to stabilise to 630 mW.

---
# 3 High-Harmonic Generation
- Insert beamblock 1 and 2
- Close iris
- Put beamblock after fibre
- Turn on beam stabilization and realign if necessary, using either focussing mirror or the two (piezo) mirrors right before the fibre
- Open iris
- check if mode looks good
- Close shutter
- Remove beamblock
- Insert 600 nm filter, use bottom right monitor
- Close gas bottle and HHG valve
- Fully open the pressure preregulator
- Open 'pump' valves and start pump
- After a minute (see pressure on right display), stop pump and close pump values
- Fully close pressure preregulator
- Open HHG gas
- Set pressure preregulator (something like 60)
- Open both vacuum valves (?)
- Turn on camera, its power supply is behind it
- Start software in LabView
- Move up the mirror
- Let HHG gas enter
- Open Shutter
- If there are counts, optimize them a little
- Let the system warm up: 
	- Close gas to vacuum chamber, to not waste gas
	- Close shutter

---
# 4 ATAS
- On upper right monitor, open Main_synchro_STRA_clean in LabView
- The blue bar on the right shows stability and should be below 2. It depends mostly on the iris and the exposure time. 
- Turn on shutter chiller
- Turn on trigger
- Open the crank between sample and target chamber. 
- Turn on stepper motor, open VAB program (COM3 position, set COM port, 'online'), and move sample down while checking the HHG counts.
>[!Danger]
>Always check on the camera! You should not go much above y=4.5 mm!
- There are 9 squares per grid, one is bigger, each is (250 um)$^2$ big and 300 um distance in between. 
	- It is good to scan the sample first, so find samples, write down their position. Also write down when you think there is a hole instead of a sample. x
- The counts disappear at the bottom of the sample holder, around z=35 mm.
- Set the pump power to 1 mW and work yourself up if you see no signals...
- If you have found your sample, do the [[#5.1 Spatial Overlap|spatial]] and [[#5.2 Temporal Overlap|temporal]] overlap.
- Set the program to Newport such that 
- Start STRA program and set to Newport, the delay should set to a number (around -50000), which is the zero of your temporal overlap.
- ==Turn off stepper motor, Steckdosenleiste, licht.==
- ==Make sure 'stop program after current step' is not selected!!==
- ==Set shutter controller to 'remote'.==
- Start the measurement around 200 fs before, so set -50000-200, where 50000 is for example the initial value of 'Start'.
---
# 5 Overlap
- Overlap is done without filter and without gas: You compare both red pulses. 
## 5.1 Spatial Overlap
- Align to camera, place _cross_ with mouse
- Close the shutter, main point will vanish
- Turn on electornic shutter controller
- Align probe on _cross_ with controller 2AB (don't be confused with the reflection!)
- Optimize shape with 3AB
- Repeat 4. and 5. until shape and position is good
- Open shutter
## 5.2 Temporal Overlap
- Use ThinkPad and look at interferogram
- Set piezo to 5 V (preset 'reset')
- Maximize signal with the mirror before the 'wheel', but after the beam splitter
- Maximize interference with motion controller: 'Move relative position'
- Write down the position

---
# 6 Measuring STRA
- Lift toroidal mirror
- Insert filter
- Turn shutter controller off
- Open gas to HHG
- STRA: Set position before zero
- Turn shutter on, and check if something happens with the counts
- Start
- Shutter settings: SPSS * steps > 100

---
# 7 RABBITT
- Set delay piezo to 'RABBITT' (standard setting is 'Nadja')
- Turn off gauge below table corner, CH2
- Pump the tubes and check pressure on right display -> 'target gas' should go down
- Target gas should be around 1500
- Open everything on the left side of target window (thin tube, behind power meter)
- Set manometer to 295
- Turn on pre-amp current
- Turn on FASTcomtec sockets
- Measure IR power and set with 1AB to roughly 1 mW
- Overlap them [[#5.1 Spatial Overlap|spatially]] and [[#5.2 Temporal Overlap|temporally]]
- Open gas TOF at bottle
- Open gas before and after manometer
- Set manometer to 295
- Drive in nozzle to line
- Insert 100 nm filter
- Turn on trigger (below intralux)
- Start MCS6A program
- Start Attoline, set device to FAST and do 3000 accumulation
- Let XUV pass, open shutter (doesn't matter if counts saturate)
- Ramp up MCP (high voltage on) voltage slowly with right knob, expect counts over 1.95 V
- Go to roughly 2000, and do not go above 2.1 V
- Optimise by moving nozzle
	- If the counts are too high, then the metal is in the beam
- Settings:
	- 100 steps, 2 delta (fs steps), 0 start (0 V)
- Open IR with electronic shutter controller
- Voltage might need to be readjusted after measurement
- As soon as we see pulse, set it from start to (start + steps * delta)

---
# 8 10-Pass Alignment
- Connect photodiode to oscilloscope
- Use insertable mirror to align pass by pass (actually pass 2,4, 8 and 10)
- 
- bla bla

---
# 9 Laser shut-down
In E8;
- Turn off beam stabilisation 3
- Measure the power
- Block seeding
- Turn off the crystal chiller, temperature will slowly raise
- Wait for $T=250^\circ$ and ramp down Evo voltage from 17.9 V to 7 V. Turn off.
- Turn of Evo 30 (black box)
- Ramp down the Pockel's cell
- Turn off the Dazzler
- Turn off beam stabilisation 2 and 1
- Turn off crystal chiller heating

In E6.2:
- Turn off the chiller 
- Turn off the ballistic thingy, by turning the thing

---
# 10 Venting and Purgings Chambers
## 10.1 Venting (any) chamber
- Separate chamber to vent from others by closing black valves 
- Close the pre-vac that leads to the chamber to vent
- Venting the generation chamber:
	- Block beam in ==E8==
	- Move out all filters
	- Ensure that the shutter chiller is off
	- Shut down the four (or five if the first chamber is vented as well) turbo pumps labelled 'Front Unit'
	- Remove KF on second camber to prevent over-pressure
	- Open the nitrogen valve on the wall to approximately 0.6 bar (red line)
	- After the turbos spun down, open the nitrogen valve at first chamber to start purging
	- Wait until the KF be easily removed, which usually happens when the focusing chamber pressure is around 7e+2 mbar
	- Close the nitrogen at first chamber and wall
- Venting the back part:
	- Move out filter in front of camera
	- Shut down 'cross chamber' and 'surface' (both on right side of pressure reader, 2 out of 5)
	- Turn off camera
- Working with the laser within the chambers while vented:
	- Block the beam before any chambers.
	- Power of laser needs to be reduced to roughly $600$ mW in E8. 
	- OD filters before photodiodes for beam stabilisation might need to be removed.
- Shut down the turbo pumps that are still connected to the chamber to vent
- After turbo has spun down to almost 0 Hz, flush with nitrogen if possible (open at wall, 0.6 bar)
- Open the chamber
## 10.2 Purging (any) chamber
- Close all pre-vacs expect the one to purge
- Wait until pressures around 3e-1 mbar to switch on the turbo pumps
- After the turbos have spun up, and pressure is around 1e-4/1e-5 mbar, open all other pre-vacs
- In generation chamber: Rotate filters back
# 11 SPIDER
Doing a SPIDER can be useful when RABBITT measurement looks unexpected.

- Outcouple probe (HHG) arm with the same mirror that is used to do spatial and temporal overlap. 
- Use mirrors after power meter to send the beam through the black tunnel.
- Use SPIDER laptop and connect to SPIDER box.
- Follow introductory manual step-by-step.
# 12 Swapping Samples
- Close prevac to upper turbo labelled 'turbo manipulation chamber'
- On Stepper motor controller, set drives to 'on' and use Joystick
- Drive sample to top position, using z-direction
- Use the 'Kurbel' to separate the top from the bottom
- Turn off the turbo labelled 'turbo manipulation chamber'
- Wait for turbo to spin down (~45 - 60 minutes)
- In the mean-time:
	- Prepare new copper ring
	- Prepare tools to remove the screws
	- Get aluminium foil ready
- Open the nitrogen when it has almost spun down to 0 Hz
- Wear gloves, a robe and hair cover
- Remove screws
- Within the chamber, loosen the bottom two screws with hand underneath (do not fully remove screws)
- Swap the sample
- Close the window with new copper ring and screws
- [[#10.2 Purging (any) chamber|Purge]] the chamber

# Changing TOF Nozzle for RABBITT
- As reference, it is worth aligning the alignment laser first
- Vent the target, TOF, and manipulator chamber (since that one has the nitrogen valve). 
- Remove all cables from the TOF (the single, centred green one and the red ones around it). 
- Remove the big flange on the window side.
- Old nozzle was 5 cm long, new one is 4 cm long. It is bent forward in beam direction to help see scattering on the bottom camera.
- Nozzle is glued (TedPella Silver conductive epoxy) to a rod. That rod is connected by swagelock to the alignment stage.
- Alignment stage behaves a bit odd, since it cant be properly used over the full range in beam direction. At the end, it goes down instead of forward - keep that in mind.
- Possibly not relevant for silver epoxy glue: Glue is very hard and has to be chiselled away.
- Clean the rod using isopropanol and acetone, and then also use the ultrasonic bath. 
- It is easiest to use a hot plate for the glue to harden.
- After nozzle is glued back on, attach rod back to alignment stage. 
- Clean everything (also inside the chamber) using isopropanol and acetone. 
- Close the flange again (use a Ratsche at 20-25 Nm).
- Wait for the pressure to go low again.
- Let in some gas through the nozzle to see if the pressure rises. With 295 at the manometer, the pressure should be around $1$ to $2$ $10^{-5}$ mbar in the TOF. 
- Degas the gauges using the controller. Not all gauges have that option.
- Attach heating around the whole beamline part containing TOF, manipulator chamber, target chamber and importantly also the very top part. Make sure that 
- Heat at 100 $^\circ$C to condensate water remaining in the TOF. Use temperature sensors!
- Don't forget to reattach the TOF cables before measuring! :-)


---